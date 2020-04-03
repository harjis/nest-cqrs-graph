import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Node } from './node.entity';

@Entity('graphs')
export class Graph {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToMany(
    type => Node,
    node => node.graph,
  )
  nodes!: Node[];

  @Column()
  name!: string;
}
