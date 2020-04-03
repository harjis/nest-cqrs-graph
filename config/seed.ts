import { ConnectionOptions, createConnection } from 'typeorm';

import { Graph } from '../src/graphs/entities/graph.entity';
import { Node } from '../src/graphs/entities/node.entity';

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'nest-graph_dev',
  entities: ['./**/*.entity.ts'],
  synchronize: true,
};
createConnection(config).then(async connection => {
  const graph = new Graph();
  graph.name = 'Graph 1';
  const graph2 = new Graph();
  graph2.name = 'Graph 2';
  await connection.getRepository(Graph).save(graph);
  await connection.getRepository(Graph).save(graph2);

  const node = new Node();
  node.name = 'Input node';
  node.x = 100;
  node.y = 100;
  node.graph = graph;
  const node2 = new Node();
  node2.name = 'Output node';
  node2.x = 300;
  node2.y = 300;
  node2.graph = graph;

  const node3 = new Node();
  node3.name = 'Output node';
  node3.x = 200;
  node3.y = 200;
  node3.graph = graph2;

  await connection.getRepository(Node).save(node);
  await connection.getRepository(Node).save(node2);
  await connection.getRepository(Node).save(node3);
});
