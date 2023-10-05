import { Repository } from "typeorm";
import { DailyEntities } from "./daily-entities";
import { InjectRepository } from "@nestjs/typeorm";
import { DailyDto } from "./dto/dailyDto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class DailySerice{
constructor(
    @InjectRepository(DailyEntities)
    private readonly dailyRepository: Repository<DailyEntities>
){}

async registerDaly(dailyDto: DailyDto){
    const newDaily= new DailyEntities();

    newDaily.date= dailyDto.date
    newDaily.km_walkend= dailyDto.km_walkend
    newDaily.sepen_amount= dailyDto.sepen_amount
    newDaily.gross_amount= dailyDto.gross_amount
    newDaily.net_amount= (dailyDto.gross_amount- dailyDto.sepen_amount)

    newDaily.create_at= new Date;
    newDaily.update_at= new Date;

    this.dailyRepository.save(newDaily)
    
    

   


}


}