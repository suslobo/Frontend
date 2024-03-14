import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Editorial {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({nullable: false, unique: true}) // nullable es obligatorio
    cif: string;

    @Column()
    year: number;

}