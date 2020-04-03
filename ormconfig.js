module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'nest-graph_dev',
  entities: ['dist/**/*.entity.js'],
  synchronize: true,
  logging: true
};
