import { Body, Controller, Get, Post } from '@nestjs/common';
import { DailySerice } from 'src/daily/daily-services';
import { DailyDto } from 'src/daily/dto/dailyDto';

@Controller('/daily')
export class DailyController {

    constructor(
        private readonly dailyService: DailySerice
    ){}

    @Post()
    async register(@Body() dailyDto: DailyDto){
        const newRegister=await this.dailyService.registerDaly(dailyDto)

        return {
            message: 'register sucessfully'
        }
    }

    @Get('/all')
    async findAll(){
        return this.dailyService.allregister()
    }


    @Get()
    async ola(){
        return 'ola'
    }
}
