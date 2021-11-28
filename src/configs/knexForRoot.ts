import { KnexModule } from 'nestjs-knex';
import * as dotenv from 'dotenv';
dotenv.config();

const initOption: any = {
  client: "mysql",
  useNullAsDefault: true,
  connection: {  
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DATABASE_DEFAULT
  }
}

export const knexConf = KnexModule.forRoot({
  config: {
    ...initOption 
  }
})
