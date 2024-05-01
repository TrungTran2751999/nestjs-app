import { BadRequestException, Body, Injectable, Res } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Client } from "src/models/client";
import { Repository } from "typeorm";
import * as bscrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "./user.service";
import { Response } from "supertest";

@Injectable()
export class ClientService{
    constructor(
        @InjectRepository(Client)
        private clientService:Repository<Client>,

        private jwtService:JwtService
    ){}
    async register(@Body() clientDTO:Client){
        try{
            clientDTO.password = await bscrypt.hash(clientDTO.password, 12);
            this.clientService.save(clientDTO);
        }catch{

        }
    }
    findByName(name:string):Promise<Client>{
        return this.clientService.findOne({
            where: {userName:name}
        })
    }
    async login(@Body() clientDTO:Client, @Res({passthrough:true}) res:Response){
        let user = await this.findByName(clientDTO.userName);
        if(await !bscrypt.compare(clientDTO.password, user.password)){
            throw new BadRequestException(":)))) 400 nha")
        }
        const jwt = await this.jwtService.signAsync({id: user.id, name: user.userName}, { secret: `sdhsdlksjdlksjdslkjdslkdjslkd` })
        
        return jwt;
    }
}