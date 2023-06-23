/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CategoryService } from 'src/modules/ventas/category/category.service';


@Injectable()
export class CategorySeeder {
  constructor(
    private categoryService: CategoryService,
  ) {}
  async run() {
    await this.categoryService.findAll();
  }
}