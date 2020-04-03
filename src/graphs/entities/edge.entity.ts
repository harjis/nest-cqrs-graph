import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Node } from './node.entity';

@Entity('edges')
export class Edge {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(
    type => Node,
    node => node.fromEdges,
    { nullable: false },
  )
  fromNode!: Node;

  @ManyToOne(
    type => Node,
    node => node.toEdges,
    { nullable: false },
  )
  toNode!: Node;
}
