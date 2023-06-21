/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Inject } from '@nestjs/common/decorators';
import { RepositoryEnum } from 'src/shared/enum';
import { Product } from '../product/entities/product.entity';
import { Repository } from "typeorm/repository/Repository";
import { CreateProductDto, FitlerProductDto, PaginationProductDto, ReadProductDto, UpdateProductDto } from '../product/dto';
import { FindOptionsWhere, ILike } from 'typeorm';

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
  async updateOne(id: string, data: UpdateProductDto):Promise<ServiceResponseHttpModel>{
    const response = await this.repository.findOneBy({id})
    if(!response) {
      throw new NotFoundException('No se encuentra registros');
      
    }else{
      this.repository.merge(await response,data)
    }
    return this.repository.save(response)
  }

  async removeOne(id: string):Promise<ServiceResponseHttpModel>{
    const response = await this.repository.findBy({id});
    if(!response) {
      throw new NotFoundException('No se encuentra registros');
      
    }else{
      this.repository.softRemove(await response)
    }
  }
  async removeAllListeners(data: Product[]):Promise<ServiceResponseHttpModel>{
    const response = await this.repository.softRemove(data);
  }
  private async paginateAndFilter(params: FitlerProductDto){
    let where:
    FindOptionsWhere<Product>;
    FindOptionsWhere<Product> [];
      where = {};
      let {page,search} = params;
      const {limit} = params
      if (search) {
        search = search.trim(),
        page= 0;
        where = [];
        where.push({name: ILike(`%${search}`)})
       
      }
      const data = await this.repository.findAndCount({
        relations: ['bloodtype', 'gender'],
        where,
        take:limit,
        skip: PaginationProductDto.getOffset(limit,page),
      });
      return  {pagination: {limit, yotalItems: data[1]},data: [0]}
  }
}

○