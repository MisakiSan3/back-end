/* eslint-disable prettier/prettier */
import { BaseProductDto } from "./base-product.dto";
import { Expose } from "class-transformer";
export class ReadProductDto extends BaseProductDto {
    @Expose()
    readonly id;

    @Expose()
    readonly title;

    @Expose()
    readonly price;

    @Expose()
    readonly description;

    @Expose()
    readonly image;
}
