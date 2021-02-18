import { Module } from '@nestjs/common';
import { TournamentService } from './tournament.service';
import { TournamentController } from './tournament.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TournamentRepository } from './repositories/tournament.repository';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([
      TournamentRepository
    ])
  ],
  providers: [TournamentService],
  controllers: [TournamentController]
})
export class TournamentModule {}
