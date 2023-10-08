import { Repository } from "typeorm";
import { DailyEntity } from "../entity/daily-entity";
import { InjectRepository } from "@nestjs/typeorm";
import { DailyDto } from "../dto/dailyDto";
import { Injectable, NotFoundException } from "@nestjs/common";
import { DailyRepository } from "../repository/daily-repository";

@Injectable()
export class DailySerice {

    constructor(private readonly dailyRepository: DailyRepository) { }


    async registerDaly(dailyDto: DailyDto) {
        const newDaily = new DailyEntity();
        /**
         * 
        */
        if (!dailyDto.date) {
            dailyDto.date = new Date();
        }


        newDaily.date = dailyDto.date
        newDaily.km_walkend = dailyDto.km_walkend !== null && dailyDto.km_walkend !== undefined ? dailyDto.km_walkend : 0;
        newDaily.sepen_amount = dailyDto.sepen_amount !== null && dailyDto.sepen_amount !== undefined ? dailyDto.sepen_amount : 0;
        newDaily.gross_amount = dailyDto.gross_amount !== null && dailyDto.gross_amount !== undefined ? dailyDto.gross_amount : 0;



        newDaily.net_amount = (newDaily.gross_amount - newDaily.sepen_amount)

        newDaily.create_at = new Date();
        newDaily.update_at = new Date();

        await this.dailyRepository.register(newDaily)

        return newDaily


    }

    async allregister(): Promise<DailyEntity[]> { // pode vir um array ou null ou undefind
        try {


            const result = await this.dailyRepository.allregister()

            if (!result || result.length === 0) {
                throw new NotFoundException('Nenhum registro foi encontrado.')
            }

            return result
        } catch (error) {
            throw error; // ele da erro se nao tiver nada no bd...
        }

    }

    async findDailByDay(date: string) {
        const daily = await this.dailyRepository.findDailByDay(date)
        return daily
    }


}