import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Graph } from '../../entities/graph.entity';
import { Node } from '../../entities/node.entity';
import { CreateNodeCommand } from './create-node.command';

@CommandHandler(CreateNodeCommand)
export class CreateNodeHandler implements ICommandHandler<CreateNodeCommand> {
  constructor(
    @InjectRepository(Graph)
    private readonly graphRepository: Repository<Graph>,
    @InjectRepository(Node)
    private readonly nodeRepository: Repository<Node>,
  ) {}

  async execute(command: CreateNodeCommand): Promise<Node> {
    console.log('Async CreateNodeCommand');
    const { graphId, node } = command;
    const graph = await this.graphRepository.findOneOrFail(graphId);
    node.graph = graph;
    return this.nodeRepository.save(node);
  }
}
