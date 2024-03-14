import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false}) // título obligatorio
    title: string;

    @Column({length: 1000})
    description: string;

    @Column()
    photo: string;

}