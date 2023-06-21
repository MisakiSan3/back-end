/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ProductSeeder } from './products-seeder.seeder';
import { CategorySeeder } from './categories-seeder.seeder';

@Injectable()
export class DatabaseSeeder {
  constructor(
    private productsSeeder: ProductSeeder,
    private categorySeeder: CategorySeeder,
  ) {}

  async run() {
    await this.productsSeeder.run();
    await this.categorySeeder.run();
  }
}