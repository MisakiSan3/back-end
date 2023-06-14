/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Inject } from '@nestjs/common/decorators';
import { RepositoryEnum } from 'src/shared/enum';
import { Product } from '../product/entities/product.entity';
import { Repository } from "typeorm/repository/Repository";
import { CreateProductDto, ReadProductDto } from '../product/dto';

@Injectable()
export class VentasService {
    constructor(@Inject(RepositoryEnum.PRODUCT_REPOSITORY)
    private repository: Repository<Product>
    ){}
  async create(payload: CreateProductDto): Promise<ServiceResponseHttpModel> {
   const newProduct =  this.repository.create(payload);
   const productCreated = await this.repository.save(newProduct);
    return {data: plainToInstance(ReadProductDto, productCreated)};
  }

  async catalogue():Promise<ServiceResponseHttpModel>{
    const response = this.repository.findAndCount({take: 1000});
    return {data: response[0], pagination: {totalItems: response[1],limit: 10}}
  }

  findAll() {
    return `This action returns all product`;
  }

  findOne(id: number) {
    return `This action returns a # product`;
  }

  update() {
    return `This action updates a # product`;
  }

  remove(id: number) {
    return `This action removes a # product`;
  }
}
