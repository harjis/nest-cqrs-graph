import { ICommand } from '@nestjs/cqrs';

import { Node } from '../../entities/node.entity';

export class CreateNodeCommand implements ICommand {
  constructor(public readonly graphId: number, public readonly node: Node) {}
}
