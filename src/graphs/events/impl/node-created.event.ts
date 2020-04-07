import { IEvent } from '@nestjs/cqrs';
import { Node } from '../../entities/node.entity';

export class NodeCreatedEvent implements IEvent {
  constructor(public readonly node: Node) {}
}
