import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { NodeCreatedEvent } from '../impl/node-created.event';

@EventsHandler(NodeCreatedEvent)
export class NodeCreatedHandler implements IEventHandler<NodeCreatedEvent> {
  handle(event: NodeCreatedEvent): any {
    console.log('NodeCreatedEvent handler');
  }
}
