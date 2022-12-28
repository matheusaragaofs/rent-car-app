export const ormconfig = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '123321',
  database: 'yourcar',
  entities: ['dist/**/entities/*{.ts,.js}'],
  synchronize: true,
  migrations: ['dist/migrations/*{.ts,.js}'],
  autoLoadEntities: true,
  cli: {
    migrationsDir: 'src/migrations',
  },
};
