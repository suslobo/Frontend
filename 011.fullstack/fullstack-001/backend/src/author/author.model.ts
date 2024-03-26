import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Author{
    @PrimaryGeneratedColumn () // para que el id se genere automáticamente
    id: number;

    @Column({nullable: true}) // nombre opcional
    firstName: string;

    @Column({nullable: true})
    lastName: string;

    @Column({type: 'date', nullable: true}) // sin hora ni minuto
    birthDate: Date;

    @Column({nullable: true})
    salary: number;

    @Column({nullable: true})
    country: string

    @Column({nullable: true})
    photoUrl: string;

    @Column({length: 3000})
    bio: string;

    @Column({nullable: true})
    wikipediaUrl: string;
}