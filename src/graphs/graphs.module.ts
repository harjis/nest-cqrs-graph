import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';

import { CommandHandlers } from './commands/handlers';
import { Graph } from './entities/graph.entity';
import { GraphsController } from './controllers/graphs.controller';
import { GraphsService } from './services/graphs.service';
import { Node } from './entities/node.entity';
import { NodesController } from './controllers/nodes.controller';
import { QueryHandlers } from './queries/handlers';

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([Graph]),
    TypeOrmModule.forFeature([Node]),
  ],
  controllers: [GraphsController, NodesController],
  providers: [GraphsService, ...CommandHandlers, ...QueryHandlers],
})
export class GraphsModule {}
