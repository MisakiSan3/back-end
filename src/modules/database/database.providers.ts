/* eslint-disable prettier/prettier */
import { DataSource } from 'typeorm';
import { ConfigType } from '@nestjs/config';
import { DataSourceEnum } from '../../shared/enum/data-source.enum';
import { config } from '../core';

export const databaseProviders = [
  {
    provide: DataSourceEnum.PG_DATA_SOURCE,
    inject: [config.KEY],
    useFactory: async (configService: ConfigType<typeof config>) => {
      const { username, host, database, password, port } =
        configService.database;
      const dataSource = new DataSource({
        type: 'postgres',
        host,
        port,
        username,
        password,
        database,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        // entities: [User, StudentEntity, CatalogueEntity],
        // migrations: ['src/database/migrations/*.ts'],
        // migrationsTableName: 'migrations',
        dropSchema: true,
        
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];