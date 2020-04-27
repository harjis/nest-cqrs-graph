module.exports = {
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'nest-cqrs-graph_dev',
  entities: ['dist/**/*.entity.js'],
  synchronize: true,
  logging: true
};
