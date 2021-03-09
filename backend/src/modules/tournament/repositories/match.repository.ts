import { Match } from "src/entities/match.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Match)
export class MatchRepository extends Repository<Match> {
    async getMatches(tournamentId: number) {
        return await this.find({
            where: {
                tournament: {id: tournamentId}
            },

            relations: ["participants", "winner"]
        })
    }
}