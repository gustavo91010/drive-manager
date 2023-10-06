import { Repository } from "typeorm";
import { DailyEntity } from "./daily-entity";
import { InjectRepository } from "@nestjs/typeorm";
import { DailyDto } from "./dto/dailyDto";
import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class DailySerice {

    
    constructor(
        @InjectRepository(DailyEntity)
        private readonly dailyRepository: Repository<DailyEntity>
    ) { }

    async registerDaly(dailyDto: DailyDto) {
        const newDaily = new DailyEntity();
        if (!dailyDto.date) {
            dailyDto.date = new Date();
        }


        newDaily.date = dailyDto.date
        newDaily.km_walkend = dailyDto.km_walkend
        newDaily.sepen_amount = dailyDto.sepen_amount
        newDaily.gross_amount = dailyDto.gross_amount
        newDaily.net_amount = (dailyDto.gross_amount - dailyDto.sepen_amount)

        newDaily.create_at = new Date();
        newDaily.update_at = new Date();
console.log(newDaily)
        await this.dailyRepository.save(newDaily)

        return newDaily


    }

    async allregister(): Promise<DailyEntity[]> { // pode vir um array ou null ou undefind
        try {


            const result = await this.dailyRepository.find()

            if (!result || result.length === 0) {
                throw new NotFoundException('Nenhum registro foi encontrado.')
            }

            return result
        } catch (error) {
            throw error; // ele da erro se nao tiver nada no bd...
        }

    }


}