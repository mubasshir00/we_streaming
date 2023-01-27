import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  port: <number>(<unknown>process.env.DATABASE_PORT),
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USER,
  password: <string>(<string>process.env.DATABASE_PASSWORD),
  entities: [__dirname + '../src/entity/*.entity.{ts,js}'],
  synchronize: true,
};
