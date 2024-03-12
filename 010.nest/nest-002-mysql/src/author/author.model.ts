import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Author{
    @PrimaryGeneratedColumn () // para que el id se genere automáticamente
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({type: 'date'}) // sin hora ni minuto
    birthDate: Date;

    @Column()
    salary: number;
}