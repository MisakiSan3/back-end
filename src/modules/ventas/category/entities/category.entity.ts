/* eslint-disable prettier/prettier */
import { Column,OneToMany, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Product } from "../../product/entities/product.entity";

@Entity('category')

export class Category {
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

    @Column('varchar',{
        name: 'nombre',
        nullable: false,
        comment: 'nombre de la categoria'
    })


    @Column('varchar',{
        name: 'nombre',
        nullable: false,
        comment: 'nombre de la categoria'
    })
    name: string;

    @Column('varchar',{
        name: 'description',
        nullable: false,
        comment: 'descripción de la categoria'
    })
    description: string;

    @OneToMany(()=>Product, product=> product.category)
        product: Product


}
