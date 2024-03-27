import { Book } from "src/book/book.model";
import { User } from "src/user/user.model";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

// representa una valoración con comentario sobre un Book realizada por user
@Entity()
export class Rating {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    score: number;

    @Column({length: 2000, nullable: true})
    comment: string;

    @CreateDateColumn() // genera la fecha automáticamente de la publicacion del comentario
    createdDate: Date;

    // asociación con usuario
    @ManyToOne(() => User, {eager: true}) // para que en el postman te traiha el book y el usuario
    user: User;

    // asociación con book
    @ManyToOne(() => Book, {eager: true}) // para que en el postman te traiha el book y el usuario
    book: Book;



}