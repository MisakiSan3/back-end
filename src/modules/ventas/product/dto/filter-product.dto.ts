/* eslint-disable prettier/prettier */

import { IsNumber, IsOptional, IsString } from "class-validator";
import { PaginationProductDto } from "./pagination-product.dto";

export class FitlerProductDto extends PaginationProductDto {
    @IsOptional()
    @IsString({message: 'El campo description es string'})
    readonly title: string;

    @IsOptional()
    //@IsNumber({message: 'El campo codigo de la categoria es opcional y numero'})
    readonly category: string;
}