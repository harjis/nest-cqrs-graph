import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Graph } from './entities/graph.entity';
import { GraphsController } from './controllers/graphs.controller';
import { GraphsService } from './services/graphs.service';
import { Node } from './entities/node.entity';
import { NodesController } from './controllers/nodes.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Graph]),
    TypeOrmModule.forFeature([Node]),
  ],
  controllers: [GraphsController, NodesController],
  providers: [GraphsService],
})
export class GraphsModule {}
