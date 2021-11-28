import { Controller, Get, Res } from '@nestjs/common';
import { HomeService } from './home.service';

@Controller('home')
export class HomeController {
    constructor(
        private homeService: HomeService
    ) { }

    @Get()
    async getHome(@Res() res){
        return this.homeService.testConnect()
        .then(respone =>{
            res.json(
                respone
            )
        })
        .catch(err => {})
    }
}
