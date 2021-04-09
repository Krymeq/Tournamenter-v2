import { Controller, Get, Param, ParseIntPipe, Post, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/modules/auth/guards/auth.guard';
import { AddTeamDto } from './dtos/add-team.dto';
import { TournamentService } from './tournament.service';

@Controller('tournaments')
export class TournamentController {
    constructor(private tournamentService: TournamentService) { }

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
    @Post("/:id/team")
    async addTeam(@Param('id', ParseIntPipe) id: number, team: AddTeamDto) {
        return await this.tournamentService.addTeam(id, team);
    }
}
