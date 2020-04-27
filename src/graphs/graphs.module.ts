import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';

import { Graph } from './entities/graph.entity';
import { GraphsController } from './controllers/graphs.controller';
import { Node } from './entities/node.entity';
import { NodesController } from './controllers/nodes.controller';
import { QueryHandlers } from './features/query-handlers';
import { CommandHandlers } from './features/command-handlers';

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([Graph]),
    TypeOrmModule.forFeature([Node]),
  ],
  controllers: [GraphsController, NodesController],
  providers: [...CommandHandlers, ...QueryHandlers],
})
export class GraphsModule {}
