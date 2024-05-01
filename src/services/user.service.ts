import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Column, Entity, PrimaryGeneratedColumn, Repository } from "typeorm";
import { UserEntity } from "../models/user";
import { Address } from "src/models/address";
import { AdressService } from "./address.service";
import { ClientService } from "./client.service";
@Injectable()
export class UserService{
    constructor(
        @InjectRepository(UserEntity)
        private userRepository:Repository<UserEntity>,

        @InjectRepository(Address)
        private addressRepository:Repository<Address>,

        private addressService:AdressService,
        
    ){}
    findAll():Promise<UserEntity[]>{
        return this.userRepository.find({relations:["address"]})
    }
    findOne(id:number):Promise<any>{
        return this.userRepository.query("SELECT * FROM users WHERE id=?",[id])
    }
    createUser(user:UserEntity):Promise<UserEntity>{
        return this.userRepository.save(user)
    }
    async update(id:number, user:UserEntity){
        await this.userRepository.update(id, user)
    }
    async remove(id:number):Promise<void>{
        await this.userRepository.delete(id)
    }
    findAllAddress():Promise<Address[]>{
        return this.addressRepository.find()    
    }
    findAllAddressService():Promise<Address[]>{
        return this.addressService.findAll();
    }
}
