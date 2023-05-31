/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Category } from "../../category/entities/category.entity";

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({
        name: 'Created_at',
        type: 'timestamp',
        default: ()=> 'CURRENT_TIMESTAMP'
    }
    )
    createAt = Date;

    @UpdateDateColumn({
        name: 'Updated_at',
        type: 'timestamp',
        default: ()=> 'CURRENT_TIMESTAMP'
    })
    updateAt = Date;

    @DeleteDateColumn({
        name: 'Deleted_at',
        type: 'timestamp',
        nullable: true,
    })
    deleteAt = Date;

    //////////////////////////////////////////////////////////////
    @Column('integer',{
        name: 'code',
        nullable: false,
        comment: 'Código del Producto',    
    })
    code: string;

    @Column('varchar',{
        name: 'title',
        nullable: false,
        comment: 'Nombre del Producto',
    })
    title: string;

    @Column('integer',{
        name: 'price',
        nullable: false,
        comment: 'Precio del Producto',    
    })
    price: number;

    @Column('varchar',{
        name: 'Description',
        nullable: false,
        comment: 'Descripcion del Producto',
    })
    Description: string;

    @Column('varchar',{
        name: 'images',
        nullable: false,
        comment: 'Imagen del Producto',
    })
    images:string;

    
    @ManyToOne(()=> Category, category => category.product)
        category: Category;


}
