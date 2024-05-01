import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user";

@Entity({name: "addreses"})
export class Address{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({name:"name"})
    name:string;
}