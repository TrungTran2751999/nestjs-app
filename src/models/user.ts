import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Address } from "./address";

@Entity({name: "users"})
export class UserEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({name:"name"})
    name:string;

    @Column({name:"last_name"})
    lastName:string;

    @Column({name:"address_id", nullable:true})
    addressId:number

    @OneToOne(()=>Address)
    @JoinColumn({name:"address_id"})
    address:Address
}