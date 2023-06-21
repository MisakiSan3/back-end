/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ProductService } from 'src/modules/ventas/product/product.service';


@Injectable()
export class ProductSeeder {
  constructor(
    private productsService: ProductService,
  ) {}
  async run() {
    await this.productsService.findAll();
  }
}