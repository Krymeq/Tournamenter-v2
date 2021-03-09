import { Controller, Get, Param, ParseIntPipe, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/modules/auth/guards/auth.guard';
import { TournamentService } from './tournament.service';

@Controller('tournaments')
export class TournamentController {
    constructor(private tournamentService: TournamentService){}
    
    @UseGuards(AuthGuard)
    @Get()
    async getTournaments(@Query('page', ParseIntPipe) page: number) {
        return await this.tournamentService.getTournaments(page);
    }

    @UseGuards(AuthGuard)
    @Get("/:id")
    async getTournamentDetails(@Param('id', ParseIntPipe) id: number) {
        return await this.tournamentService.getTournamentDetails(id);
    }

    @UseGuards(AuthGuard)
    @Get("/:id/teams")
    async getAssignedTeams(@Param('id', ParseIntPipe) id: number) {
        return await this.tournamentService.getAssignedTeams(id);
    }

    @UseGuards(AuthGuard)
    @Get("/:id/matches")
    async getMatches(@Param('id', ParseIntPipe) id: number) {
        return await this.tournamentService.getMatches(id);
    }
}
