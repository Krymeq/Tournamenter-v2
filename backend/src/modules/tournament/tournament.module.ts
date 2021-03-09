import { Module } from '@nestjs/common';
import { TournamentService } from './tournament.service';
import { TournamentController } from './tournament.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TournamentRepository } from './repositories/tournament.repository';
import { AuthModule } from '../auth/auth.module';
import { TeamRepository } from './repositories/team.repository';
import { MatchRepository } from './repositories/match.repository';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([
      TournamentRepository,
      TeamRepository,
      MatchRepository
    ])
  ],
  providers: [TournamentService],
  controllers: [TournamentController]
})
export class TournamentModule {}
