import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { ConfigService} from "@nestjs/config"
import { Injectable } from "@nestjs/common";

@Injectable()
export class PostgresConfigService implements TypeOrmOptionsFactory{

    //  constructor(private configService: ConfigService) {}
constructor(private configService: ConfigService){}
    
    
    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: this.configService.get<string>('DB_HOST'),
            port: this.configService.get<number>('DB_PORT'),
            username: this.configService.get<string>('DB_USERNAME'),
            password: this.configService.get<string>('DB_PASSWORD'),
            database: this.configService.get<string>('DB_NAME'),
            entities: [__dirname + '/../**/*.entity.{js,ts}'],
       //   entities: [__dirname + '/../**/*.entity.ts'],
      autoLoadEntities: true, // cara, tive que adicionar isso para me livar do erro de [Nest] 13230  - 05/10/2023 23:43:20   ERROR [ExceptionsHandler] No metadata for "DailyEntity" was found. 

            synchronize: true,
          };
    }

}