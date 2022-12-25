export const ormconfig = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '',
  database: 'yourcar',
  entities: ['dist/**/entities/*{.ts,.js}'],
  synchronize: false,
  dropSchema: true,
  migrations: ['dist/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
