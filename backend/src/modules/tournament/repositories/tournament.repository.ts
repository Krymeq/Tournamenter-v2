import { EntityRepository, Repository } from "typeorm";
import { Tournament } from "src/entities/tournament.entity";

@EntityRepository(Tournament)
export class TournamentRepository extends Repository<Tournament> {
    async getTournamentDetails(id: number): Promise<Tournament | undefined> {
        return await this.findOne({
            where: { id },
            relations: [
                "teams",
                "teams.members",
                "teams.members.division",
                "divisions",
                "divisions.colors",
                "host",
            ]
        })
    }
}