import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

import { Node } from '../entities/node.entity';
import { GetNodesQuery } from '../features/nodes.for-graph/get-nodes.query';
import { CreateNodeCommand } from '../features/nodes.create/create-node.command';

@Controller('graphs/:graphId/nodes')
export class NodesController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @Get()
  async all(
    @Param('graphId', new ParseIntPipe()) graphId: number,
  ): Promise<Node[]> {
    return this.queryBus.execute(new GetNodesQuery(graphId));
  }

  @Post()
  async create(
    @Param('graphId', new ParseIntPipe()) graphId: number,
    @Body() node: Node,
  ): Promise<Node> {
    return this.commandBus.execute(new CreateNodeCommand(graphId, node));
  }
}
