import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/User';
import { getEnvVars } from 'lib/utils/config';

const env = getEnvVars();

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB } = env;

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});
