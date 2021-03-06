import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import { GetGraphsQuery, GetNodesQuery } from '../queries/impl';
import { Graph } from '../entities/graph.entity';
import { Node } from '../entities/node.entity';
import { CreateNodeCommand } from '../commands/impl';

@Injectable()
export class GraphsService {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  async allGraphs(): Promise<Graph[]> {
    return this.queryBus.execute(new GetGraphsQuery());
  }

  allNodesForGraph(graphId: number): Promise<Node[]> {
    return this.queryBus.execute(new GetNodesQuery(graphId));
  }

  async createNode(graphId: number, node: Node): Promise<Node> {
    // So this is always untyped because of cqrs implementation
    return this.commandBus.execute(new CreateNodeCommand(graphId, node));
  }
}
