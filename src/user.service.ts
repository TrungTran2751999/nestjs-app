import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Column, Entity, PrimaryGeneratedColumn, Repository } from "typeorm";
@Injectable()
export class UserService{
    constructor(
        @InjectRepository(UserEntity)
        private userRepository:Repository<UserEntity>,
    ){}
    findAll():Promise<UserEntity[]>{
        return this.userRepository.find()
    }
    findOne(id:number):Promise<any>{
        return this.userRepository.query("SELECT * FROM UserEntity WHERE id=?",[id])
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
}

@Entity()
export class UserEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    last_name:string;
}