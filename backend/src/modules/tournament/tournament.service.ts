import { Injectable, NotFoundException } from '@nestjs/common';
import { Tournament } from 'src/entities/tournament.entity';
import { MatchRepository } from './repositories/match.repository';
import { TeamRepository } from './repositories/team.repository';
import { TournamentRepository } from './repositories/tournament.repository';

@Injectable()
export class TournamentService {
    private itemsPerPage = 10;
    constructor(private tournamentRepository: TournamentRepository,
                private teamRepository: TeamRepository,
                private matchRepository: MatchRepository){}
    
    async getTournaments(page: number) {
        const from = this.itemsPerPage * (page - 1);
        const to = from + this.itemsPerPage;
        const [result, total] = await this.tournamentRepository.findAndCount({
            take: this.itemsPerPage,
            skip: from
        }); 
        return {
            result, 
            pagination: {
                total, 
                itemsPerPage: this.itemsPerPage,
                currentPage: page,
                from,
                to: to > total ? total : to
            }
        }
    }

    async getTournamentDetails(id: number): Promise<Tournament> {
        const tournament = await this.tournamentRepository.getTournamentDetails(id);
        if (!tournament) 
            throw new NotFoundException("Tournament with given ID has not been found");

        tournament.teamCount = await this.teamRepository.count({tournament});
        return tournament;
    }

    async getAssignedTeams(id: number) {
        return await this.teamRepository.getAssignedTeams(id);
    }

    async getMatches(id: number) {
        return await this.matchRepository.getMatches(id);
    }
}
