import { Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Team } from "./team.entity";
import { Tournament } from "./tournament.entity";

@Entity()
export class Match {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Tournament)
    @JoinColumn({name: 'tournament_id'})
    tournament: Tournament;

    @ManyToMany(() => Team)
    @JoinTable({name: 'match_participations'})
    participants: Team[];

    @ManyToOne(() => Team)
    @JoinColumn({name: 'winner_id'})
    winner: Team;
}