import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //-- Enable CROS Origin
  app.enableCors({
    origin: true,
    credentials: true
  });

  await app.listen(process.env.PORT);
  console.log("Now server start at port : ", process.env.PORT);

}
bootstrap();
