import { Module } from "@nestjs/common";
import { UserEntity, UserService } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports:[TypeOrmModule.forFeature([UserEntity])],
    controllers:[],
    providers:[UserService],
})
export class UserModel{}