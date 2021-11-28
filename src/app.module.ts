import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HomeModule } from './modules/home/home.module';
import { knexConf } from './configs/knexForRoot'

@Module({
  imports: [
    knexConf,
    HomeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
