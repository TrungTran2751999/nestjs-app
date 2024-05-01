import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './modules/user.module';
import { UserEntity } from './models/user';
import { Address } from './models/address';
import { Client } from './models/client';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "crud",
    entities: [UserEntity, Address, Client],
    synchronize: true
  }), 
  UserModel,
  JwtModule.register({
    secret:"fjojsdofjsdofjsdlfjsdlfjsdflsd",
    signOptions: {
      expiresIn: '1d',
    }
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
