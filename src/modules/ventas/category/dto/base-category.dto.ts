/* eslint-disable prettier/prettier */

import { Allow, IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class CategoryProductDto {
    @IsString()
    @IsNotEmpty()
    readonly name;

    @IsString()
    @IsNotEmpty()
    readonly description;

}