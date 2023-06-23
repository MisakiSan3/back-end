/* eslint-disable prettier/prettier */
import { Global, Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { DatabaseSeeder } from './seeds/database-seeder.seeder';
import { ProductSeeder } from './seeds/products-seeder.seeder';
import { CategorySeeder } from './seeds/categories-seeder.seeder';

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
