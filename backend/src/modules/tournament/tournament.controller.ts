import { Controller, Get, ParseIntPipe, Query, UseGuards } from '@nestjs/common';
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
}
