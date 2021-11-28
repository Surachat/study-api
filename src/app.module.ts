import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { KnexModule } from 'nestjs-knex';
import { AppService } from './app.service';
import { HomeModule } from './modules/home/home.module';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    KnexModule.forRoot({
      config: {
        client: "mysql",
        useNullAsDefault: true,
        connection: {
          host : process.env.MYSQL_HOST,
          port : 3306,
          user : process.env.MYSQL_USER,
          password : process.env.MYSQL_PASSWORD,
          database : process.env.MYSQL_DATABASE_DEFAULT
        },
      }
    }), 
    HomeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
