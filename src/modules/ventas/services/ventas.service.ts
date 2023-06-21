/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Inject } from '@nestjs/common/decorators';
import { RepositoryEnum } from 'src/shared/enum';
import { Product } from '../product/entities/product.entity';
import { Repository } from "typeorm/repository/Repository";
import { CreateProductDto, FitlerProductDto, ReadProductDto } from '../product/dto';

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

  async findAll(params?: FitlerProductDto): Promise<ServiceResponseHttpModel> {
    if(params?.limit > 0 && params?.page >= 0) {
      return this.paginateAndFilter(params);
    }
    const response = await this.repository.findAndCount({order: {updateAt:'DESC'},})
    return{
      data: plainToInstance(ReadProductDto,response[0]),
      pagination: {totalItems: response[1],limit: 10}
    }
  }
  async finOne(id: string):Promise<ServiceResponseHttpModel>{
    const response = await this.repository.findOne({where: {id}})
      if(!response) {
        throw new NotFoundException('No se encuentra registros');
        
      }else {
        return response;
      }
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
