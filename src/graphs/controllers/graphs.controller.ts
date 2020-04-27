import { Controller, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

import { Graph } from '../entities/graph.entity';
import { GetGraphsQuery } from '../features/graphs.index/get-graphs.query';

@Controller('graphs')
export class GraphsController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get()
  async all(): Promise<Graph[]> {
    return this.queryBus.execute(new GetGraphsQuery());
  }
}
