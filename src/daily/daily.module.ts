import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DailyEntity } from "./entity/daily-entity";
import { DailySerice } from "./service/daily-services";
import { ConfigModule } from "@nestjs/config" // acesso as variaveis de ambiente
import { DailyController } from "./controller/daily-controller";
import { DailyRepository } from "./repository/daily-repository";

@Module({
    imports:[
        TypeOrmModule.forFeature([DailyEntity]),
        ConfigModule.forRoot({
        isGlobal: true
       }),
],
   controllers:[DailyController],
    providers:[DailySerice, DailyRepository]
})
export class DailyModule{}



/**
 * 
@Module({
    imports: [TypeOrmModule.forFeature([ProdutoEntity])],
    controllers: [ProdutoController],
    providers: [ProdutoService],
})
export class ProdutoModule {}
*/