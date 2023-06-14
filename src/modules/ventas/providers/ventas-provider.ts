/* eslint-disable prettier/prettier */
import {DataSource} from 'typeorm';
import { Product } from '../product/entities/product.entity';
import { Category } from '../category/entities/category.entity';
import { DataSourceEnum, RepositoryEnum } from 'src/shared/enum';
 
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