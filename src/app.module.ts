import { Module } from '@nestjs/common';
import { DailyModule } from './daily.module';
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './config/postgres-config-service';

@Module({
  imports: [
    DailyModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService]
    })],
 // controllers: [AppController, DailyController],
 // providers: [AppService],
})
export class AppModule { }

/** 
 * @Module({
  imports: [
    UsuarioModule,
    ProdutoModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService],
    }),
  ],
})
export class AppModule {}
*/
