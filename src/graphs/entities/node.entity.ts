import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Graph } from './graph.entity';
import { Edge } from './edge.entity';

@Entity('nodes')
export class Node {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(
    type => Graph,
    graph => graph.nodes,
    { nullable: false },
  )
  graph!: Graph;

  @OneToMany(
    type => Edge,
    edge => edge.fromNode,
  )
  fromEdges!: Edge[];

  @OneToMany(
    type => Edge,
    edge => edge.toNode,
  )
  toEdges!: Edge[];

  @Column()
  name!: string;

  @Column('float')
  x!: number;

  @Column('float')
  y!: number;
}
