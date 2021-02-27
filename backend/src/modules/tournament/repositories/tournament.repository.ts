import { EntityRepository, Repository } from "typeorm";
import { Tournament } from "src/entities/tournament.entity";

@EntityRepository(Tournament)
export class TournamentRepository extends Repository<Tournament> {
}