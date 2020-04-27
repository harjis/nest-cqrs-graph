import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Graph } from '../../entities/graph.entity';
import { GetGraphsQuery } from './get-graphs.query';

@QueryHandler(GetGraphsQuery)
export class GetGraphsHandler
  implements IQueryHandler<GetGraphsQuery, Graph[]> {
  constructor(
    @InjectRepository(Graph)
    private readonly graphRepository: Repository<Graph>,
  ) {}

  async execute(query: GetGraphsQuery) {
    console.log('Async GetGraphsQuery');
    return this.graphRepository.find();
  }
}
