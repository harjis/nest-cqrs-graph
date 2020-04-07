import { AggregateRoot } from '@nestjs/cqrs';
import { Node } from '../entities/node.entity';
import { NodeCreatedEvent } from '../events/impl/node-created.event';

export class NodeModel extends AggregateRoot {
  constructor(private readonly node: Node) {
    super();
  }

  createNode() {
    this.apply(new NodeCreatedEvent(this.node));
  }
}
