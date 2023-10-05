import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DailyEntities } from "./daily/daily-entities";
import { DailySerice } from "./daily/daily-services";
import { ConfigModule } from "@nestjs/config" // acesso as variaveis de ambiente

@Module({
    imports:[
        TypeOrmModule.forFeature([DailyEntities]),
        ConfigModule.forRoot({
        isGlobal: true
       }),
],
    controllers:[],
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