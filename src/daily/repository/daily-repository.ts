import { Injectable } from "@nestjs/common";
import { DailyEntity } from "../entity/daily-entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";



@Injectable()
export class DailyRepository {

    constructor(
        @InjectRepository(DailyEntity)
        private readonly dailyRepository: Repository<DailyEntity>
    ) { }

    async register(dailyEntity: DailyEntity) {
        await this.dailyRepository.save(dailyEntity)
    }

    async allregister() {
        return await this.dailyRepository.find()
    }

    async findDailByDay(date: string): Promise<DailyEntity[]> {

        return await this.dailyRepository.createQueryBuilder("daily") //  é o alias que usaremos para referenciar a entidade DailyEntity
            .where("daily.date = :date", { date: date })// ueremos filtrar os resultados onde o campo date na entidade DailyEntity seja igual ao valor da data que estamos passando. Usamos :date
            .getMany(); // para executar a consulta e obter os resultados.
    }
}