/* eslint-disable prettier/prettier */
import {DataSourceEnum} from '../shared/enum/data-source.enum';
import {DataSource} from 'typeorm';
import { Product } from '../modules/ventas/product/entities/product.entity'
import { Category } from '../modules/ventas/category/entities/category.entity'
import {RepositoryEnum} from '../shared/enum/repository.enum'
 
export const ventasProvider= [
    {
       provide: RepositoryEnum.PRODUCT_REPOSITORY,
       useFactory: (datasource: DataSource) =>
       datasource.getRepository(Product),
       inject: [DataSourceEnum.PG_DATA_SOURCE]
    },
    {
        provide: RepositoryEnum.PRODUCT_REPOSITORY,
        useFactory: (datasource: DataSource) =>
        datasource.getRepository(Category),
        inject: [DataSourceEnum.PG_DATA_SOURCE]
     }
]