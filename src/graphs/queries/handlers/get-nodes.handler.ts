import { InjectRepository } from '@nestjs/typeorm';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Repository } from 'typeorm';

import { GetNodesQuery } from '../impl';
import { Node } from '../../entities/node.entity';

@QueryHandler(GetNodesQuery)
export class GetNodesHandler implements IQueryHandler<GetNodesQuery> {
  constructor(
    @InjectRepository(Node)
    private readonly nodeRepository: Repository<Node>,
  ) {}

  async execute(query: GetNodesQuery): Promise<Node[]> {
    console.log('Async GetNodesQuery');
    return this.nodeRepository.find({
      where: { graph: query.graphId },
    });
  }
}
