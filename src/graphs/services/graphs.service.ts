import { Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

import { GetGraphsQuery, GetNodesQuery } from '../queries/impl';
import { Graph } from '../entities/graph.entity';
import { Node } from "../entities/node.entity";

@Injectable()
export class GraphsService {
  constructor(private readonly queryBus: QueryBus) {}

  async allGraphs(): Promise<Graph[]> {
    return this.queryBus.execute(new GetGraphsQuery());
  }

  allNodesForGraph(graphId: number): Promise<Node[]> {
    return this.queryBus.execute(new GetNodesQuery(graphId));
  }
}
