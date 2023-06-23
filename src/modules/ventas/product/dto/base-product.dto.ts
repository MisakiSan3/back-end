/* eslint-disable prettier/prettier */

import { Allow, IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";
import { Category } from "../../category/entities/category.entity";

export class BaseProductDto {

    @Allow()
    readonly category: Category;

    @IsString(isIstringValidationOption())
    @IsNotEmpty()
    readonly title;

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly price;

    @IsString()
    @IsNotEmpty()
    readonly description;

    @IsString()
    readonly image;

}