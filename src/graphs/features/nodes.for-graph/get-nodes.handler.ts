import { InjectRepository } from '@nestjs/typeorm';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Repository } from 'typeorm';

import { Node } from '../../entities/node.entity';
import { GetNodesQuery } from './get-nodes.query';

@QueryHandler(GetNodesQuery)
export class GetNodesHandler implements IQueryHandler<GetNodesQuery, Node[]> {
  constructor(
    @InjectRepository(Node)
    private readonly nodeRepository: Repository<Node>,
  ) {}

  async execute(query: GetNodesQuery) {
    console.log('Async GetNodesQuery');
    return this.nodeRepository.find({
      where: { graph: query.graphId },
    });
  }
}
