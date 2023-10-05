import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DailyEntities } from "./daily-entities";
import { DailyController } from "./daily-controller/daily-controller";
import { DailySerice } from "./daily-services";

@Module({
    imports: [TypeOrmModule.forFeature([DailyEntities])],
    controllers: [DailyController],
    providers:[DailySerice]
})
export class DailyModule{}


/**
 * @Module({
    imports:[TypeOrmModule.forFeature([UsuarioEntity])],
    controllers: [UsuarioController],
    providers: [UsuarioService,UsuaioRepository, EmailEhUnicoValidador] // a classe que sera ijetatada como providers precisa esta com a anotação / decoration providers
})
 */