import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetGraphsQuery } from '../impl';
import { InjectRepository } from '@nestjs/typeorm';
import { Graph } from '../../entities/graph.entity';
import { Repository } from 'typeorm';

@QueryHandler(GetGraphsQuery)
export class GetGraphsHandler implements IQueryHandler<GetGraphsQuery, Graph[]> {
  constructor(
    @InjectRepository(Graph)
    private readonly graphRepository: Repository<Graph>,
  ) {}

  async execute(query: GetGraphsQuery) {
    console.log('Async GetGraphsQuery');
    return this.graphRepository.find();
  }
}
