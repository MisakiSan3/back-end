/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { Global } from '@nestjs/common/decorators'
import { ProductController } from './product/product.controller';
import { CategoryController } from './category/category.controller';
import { ventasProvider } from 'src/modules/ventas/providers/ventas-provider';
import { DataBaseModuleModule } from '../database/database.module';

@Global()
@Module({
  imports: [DataBaseModuleModule],
  controllers: [ProductController,CategoryController],
  providers: [...ventasProvider],
  exports: [],
})
export class VentasModule {}
