/* eslint-disable prettier/prettier */
import { Global, Module } from '@nestjs/common';
import { databaseProviders } from '../../database.providers';
import { DatabaseSeeder } from './database-seeder.seeder';
import { ProductSeeder } from './products-seeder.seeder';
import { CategorySeeder } from './categories-seeder.seeder';

@Global()
@Module({
  providers: [
    ...databaseProviders,
    DatabaseSeeder,
    CategorySeeder,
    ProductSeeder
  ],
  exports: [...databaseProviders, DatabaseSeeder],
})
export class DataBaseModuleModule {}
