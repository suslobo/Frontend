import { ApiProperty } from "@nestjs/swagger";
import { Author } from "src/author/author.model";
import { Category } from "src/category/category.model";
import { Editorial } from "src/editorial/editorial.model";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Book {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    title: string;

    @ApiProperty()
    @Column({unique: true, length: 13})
    isbn: string;

    @ApiProperty()
    @Column({name: 'pages', type: 'int', unsigned: true, default: 0})
    numPages: number;

    @ApiProperty()
    @CreateDateColumn()
    createdDate: Date;

    @ApiProperty()
    @UpdateDateColumn()
    updateDate: Date;

    @ApiProperty()
    @Column({type: 'boolean', default: false}) // en MySQL aparecerá como 0 o 1
    published: boolean;

    @ApiProperty()
    @Column({type: 'decimal', precision: 14, scale: 2})
    price: number;


    // asociaciones: ManyToOne,  ManyToMany
    // estamos asociando con Author. En mysql se ha creado una nueva columna authorId
    // @ManyToOne(() => Author) 
    // author: Author;

    // eager true hace que traiga la asociacion en las consultas. 
        //DESACONSEJADO en app grandes
    // eager false hace que no se traiga la asociación. 
        //RECOMENDADO en app grandes para optimizar consultas
    
    @ApiProperty({example: {id: 1}})
    @ManyToOne(() => Author, {eager: true}) 
    author: Author;

    @ApiProperty({example: {id: 1}})
    @ManyToOne(() => Editorial, {eager: true})
    @JoinColumn({name: 'id_editorial'}) // opcional, cambia el nombre en la columna de la base de datos
    eidtorial: Editorial;

    @ApiProperty({example: [{id: 1}]})
    @ManyToMany(() => Category, {eager: true}) // de muchos a muchos
    @JoinTable()
    categories: Category[]; // varias categorias
}