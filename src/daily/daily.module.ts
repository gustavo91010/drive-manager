import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DailyEntity } from "./daily-entity";
import { DailyController } from "./daily-controller/daily-controller";
import { DailySerice } from "./daily-services";

@Module({
    imports: [TypeOrmModule.forFeature([DailyEntity])],
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