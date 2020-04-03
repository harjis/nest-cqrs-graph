import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

import { GraphsService } from '../services/graphs.service';
import { Node } from '../entities/node.entity';

@Controller('graphs/:graphId/nodes')
export class NodesController {
  constructor(private graphsService: GraphsService) {}

  @Get()
  async all(@Param('graphId', new ParseIntPipe()) graphId: number): Promise<Node[]> {
    return this.graphsService.allNodesForGraph(graphId);
  }
}
