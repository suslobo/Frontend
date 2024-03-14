import { ApiProperty } from "@nestjs/swagger";
import { Author } from "src/author/author.model";
import { Category } from "src/category/category.model";
import { Editorial } from "src/editorial/editorial.model";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Book {

    @ApiProperty({example: 1})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({example: "Libro 1"})
    @Column()
    title: string;

    @Column({unique: true, length: 13})
    isbn: string;

    @Column({name: 'pages', type: 'int', unsigned: true, default: 0})
    numPages: number;

    @CreateDateColumn()
    createdDate: Date;

    @UpdateDateColumn()
    updateDate: Date;

    @Column({type: 'boolean', default: false}) // en MySQL aparecerá como 0 o 1
    published: boolean;

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
    @ManyToOne(() => Author, {eager: true}) 
    author: Author;

    @ManyToOne(() => Editorial, {eager: true})
    @JoinColumn({name: 'id_editorial'}) // opcional, cambia el nombre en la columna de la base de datos
    eidtorial: Editorial;

    @ManyToMany(() => Category, {eager: true}) // de muchos a muchos
    @JoinTable()
    categories: Category[]; // varias categorias
}