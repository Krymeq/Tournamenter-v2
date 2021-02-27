import { Injectable } from '@nestjs/common';
import { TournamentRepository } from './repositories/tournament.repository';

@Injectable()
export class TournamentService {
    private itemsPerPage = 10;
    constructor(private tournamentRepository: TournamentRepository){}
    
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
}
