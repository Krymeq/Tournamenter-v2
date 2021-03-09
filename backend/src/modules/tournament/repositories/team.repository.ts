import { Team } from "src/entities/team.entity";
import { EntityRepository, Repository} from "typeorm";

@EntityRepository(Team)
export class TeamRepository extends Repository<Team>{
    async getAssignedTeams(id: number) {
        return await this.find({
            where: {
                tournament: {id}
            },

            relations: [
                "members",
                "members.division",
                "members.division.colors"
            ]
        });
    }
}