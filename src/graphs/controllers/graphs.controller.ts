import { Controller, Get } from '@nestjs/common';

import { GraphsService } from '../services/graphs.service';
import { Graph } from '../entities/graph.entity';

@Controller('graphs')
export class GraphsController {
  constructor(private graphsService: GraphsService) {}

  @Get()
  async all(): Promise<Graph[]> {
    return this.graphsService.allGraphs();
  }
}
