import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DailySerice } from 'src/daily/service/daily-services';
import { DailyDto } from 'src/daily/dto/dailyDto';

@Controller('/daily')
export class DailyController {

    constructor(
        private readonly dailyService: DailySerice
    ) { }

    @Post()
    async register(@Body() dailyDto: DailyDto) {
        const newRegister = await this.dailyService.registerDaly(dailyDto)

        return {
            message: 'register sucessfully'
        }
    }

    @Get('/all')
    async findAll() {
        return this.dailyService.allregister()
    }


    @Get()
    async ola() {
        return 'ola'
    }

    @Get(":date")
    async findByDate(@Param('date') date: string) {
        const daily = this.dailyService.findDailByDay(date)
        return daily
    }
}
