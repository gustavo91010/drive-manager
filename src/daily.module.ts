import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DailyEntities } from "./daily/daily-entities";
import { DailySerice } from "./daily/daily-services";
import { ConfigModule } from "@nestjs/config" // acesso as variaveis de ambiente
import { DailyController } from "./daily/daily-controller/daily-controller";

@Module({
    imports:[
        TypeOrmModule.forFeature([DailyEntities]),
        ConfigModule.forRoot({
        isGlobal: true
       }),
],
   controllers:[DailyController],
    providers:[DailySerice]
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