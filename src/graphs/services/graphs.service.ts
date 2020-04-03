import { Injectable } from '@nestjs/common';

import { Graph } from '../entities/graph.entity';
import { QueryBus } from "@nestjs/cqrs";
import { GetGraphsQuery } from "../queries/impl";

@Injectable()
export class GraphsService {
  constructor(private readonly queryBus: QueryBus) {}

  async allGraphs(): Promise<Graph[]> {
    return this.queryBus.execute(new GetGraphsQuery());
  }

  // allNodesForGraph(graphId: number): Promise<Node[]>{
  //   return this.nodeRepository.find({
  //     where: { graph: graphId }
  //   });
  // }
}
