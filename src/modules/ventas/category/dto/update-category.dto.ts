import { PartialType } from '@nestjs/mapped-types';

import { CategoryProductDto } from './base-category.dto';
export class UpdateCategoryDto extends PartialType(CategoryProductDto) {}
