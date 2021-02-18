import { Injectable } from '@nestjs/common';
import { TournamentRepository } from './repositories/tournament.repository';

@Injectable()
export class TournamentService {
    constructor(private tournamentRepository: TournamentRepository){}
    
    async getAllTournaments() {
        return await this.tournamentRepository.find(); 
    }
}
