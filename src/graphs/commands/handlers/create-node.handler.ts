import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateNodeCommand } from '../impl';
import { Graph } from '../../entities/graph.entity';
import { Node } from '../../entities/node.entity';
import { NodeModel } from '../../models/node.model';

@CommandHandler(CreateNodeCommand)
export class CreateNodeHandler implements ICommandHandler<CreateNodeCommand> {
  constructor(
    @InjectRepository(Graph)
    private readonly graphRepository: Repository<Graph>,
    @InjectRepository(Node)
    private readonly nodeRepository: Repository<Node>,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: CreateNodeCommand) {
    console.log('Async CreateNodeCommand');
    const { graphId, node } = command;
    const graph = await this.graphRepository.findOneOrFail(graphId);
    node.graph = graph;
    const nodeModel = this.publisher.mergeObjectContext(
      this.createNodeModel(await this.nodeRepository.save(node)),
    );
    nodeModel.createNode();
    nodeModel.commit();
  }

  createNodeModel(savedNode: Node) {
    const nodeModel = new NodeModel(savedNode);
    return nodeModel;
  }
}
