import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';

import { GraphsService } from '../services/graphs.service';
import { Node } from '../entities/node.entity';

@Controller('graphs/:graphId/nodes')
export class NodesController {
  constructor(private graphsService: GraphsService) {}

  @Get()
  async all(
    @Param('graphId', new ParseIntPipe()) graphId: number,
  ): Promise<Node[]> {
    return this.graphsService.allNodesForGraph(graphId);
  }

  @Post()
  async create(
    @Param('graphId', new ParseIntPipe()) graphId: number,
    @Body() node: Node,
  ): Promise<Node> {
    return this.graphsService.createNode(graphId, node);
  }
}
