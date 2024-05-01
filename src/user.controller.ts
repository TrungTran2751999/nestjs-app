import { Body, Controller, Get, HttpStatus, Param, Post, Res } from "@nestjs/common";
import { UserEntity, UserService } from "./user.service";
import { Repository } from "typeorm";

@Controller('user')
export class UserController{
    constructor(private userService:UserService){}
    @Get()
    async findAll(@Res() res:Response){
        const response = await this.userService.findAll()
        return response
    }
    @Get(":id")
    async findById(@Param() id:number, @Res() res:Response){
        const response = await this.userService.findOne(id)
        return response
    }
    @Post()
    async create(@Body() createUserDTO:UserEntity, @Res() res:Response){
        const response = await this.userService.createUser(createUserDTO);
        return response
    }

}