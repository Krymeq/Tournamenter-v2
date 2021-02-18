import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/modules/auth/guards/auth.guard';
import { TournamentService } from './tournament.service';

@Controller('tournaments')
export class TournamentController {
    constructor(private tournamentService: TournamentService){}
    
    @Get('all')
    @UseGuards(AuthGuard)
    async getTournaments() {
        return await this.tournamentService.getAllTournaments();
    }
}
