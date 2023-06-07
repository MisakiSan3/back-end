/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { BaseProductDto } from './base-product.dto';

export class UpdateProductDto extends PartialType(BaseProductDto) {
    
}
