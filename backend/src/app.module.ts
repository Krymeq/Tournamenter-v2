import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { Module } from '@nestjs/common';
import { TournamentModule } from './modules/tournament/tournament.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ConfigModule.forRoot({isGlobal: true}),
    UserModule,
    TournamentModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
