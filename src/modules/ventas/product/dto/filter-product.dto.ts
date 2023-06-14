/* eslint-disable prettier/prettier */

import { IsNumber, IsOptional, IsString } from "class-validator";
import { PaginationProductDto } from "./pagination-product.dto";

export class FitlerProductDto extends PaginationProductDto {
    @IsOptional()
   // @IsString(isStringValidationOptions())
    readonly title:string;

    @IsOptional()
    //@IsNumber(isStringValidationOptions())
    readonly price: number;
}
