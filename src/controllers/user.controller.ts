import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Res, } from "@nestjs/common";
import {UserService } from "../services/user.service";
import { Repository } from "typeorm";
import { UserEntity } from "../models/user";
import { ClientService } from "src/services/client.service";
import { Client } from "src/models/client";

@Controller('user')
export class UserController{
    constructor(
        private userService:UserService,
        private clientService:ClientService
    ){}
    @Get()
    async findAll(){
        const response = await this.userService.findAll()
        return response
    }
    @Get(":id")
    async findById(@Param() id:number){
        const response = await this.userService.findOne(id)
        return response
    }
    @Post()
    async create(@Body() createUserDTO:UserEntity){
        const response = await this.userService.createUser(createUserDTO);
        return response
    }
    @Put(":id")
    async update(@Param() id:number, @Body() updateUserDTO:UserEntity){
        const response = await this.userService.update(id, updateUserDTO);
        return response
    }
    @Delete(":id")
    async remove(@Param() id:number){
        const response = await this.userService.remove(id)
        return response
    }
    @Get("address/all")
    async findAllAddress(){
        const res = await this.userService.findAllAddress();
        return res
    }
    @Get("address/getall")
    async findAllAdresss(){
        const res = await this.userService.findAllAddressService();
        return res
    }
    @Post("register")
    async register(@Body() client:Client){
        const res = await this.clientService.register(client);
        return res;
    }
    @Post("login")
    async login(@Body() client:Client){
        const res = await this.clientService.login(client);
        return res
    }
}