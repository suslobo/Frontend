import { Book } from "src/book/book.model";
import { User } from "src/user/user.model";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Reservation {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'date'})
    startDate;

    @Column({type: 'date' })
    endDate;

    @Column({type: 'decimal', precision: 14, scale: 2})
    price: number;

    // asociación con usuario

    @ManyToOne(() => User, {eager: true}) // para que en el postman te traiha el book y el usuario
    user: User;

    // asociación con book

    @ManyToOne(() => Book, {eager: true}) // para que en el postman te traiha el book y el usuario
    book: Book;




    
}