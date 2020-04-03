import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Graph } from '../entities/graph.entity';
import { Node } from '../entities/node.entity';

@Injectable()
export class GraphsService {
  constructor(
    @InjectRepository(Graph)
    private graphRepository: Repository<Graph>,
    @InjectRepository(Node)
    private nodeRepository: Repository<Node>,
  ) {}

  allGraphs(): Promise<Graph[]> {
    return this.graphRepository.find();
  }

  allNodesForGraph(graphId: number): Promise<Node[]>{
    return this.nodeRepository.find({
      where: { graph: graphId }
    });
  }
}
