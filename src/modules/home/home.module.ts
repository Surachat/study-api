import { Module } from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeController } from './home.controller';
import { knexConf } from 'src/configs/knexForRoot';

@Module({
  imports: [knexConf],
  providers: [HomeService],
  controllers: [HomeController],
  exports: [HomeService],

})
export class HomeModule {}
