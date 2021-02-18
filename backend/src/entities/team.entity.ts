import { Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { TeamMembership } from "./team-membership.entity";
import { Tournament } from "./tournament.entity";

@Entity()
export class Team {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => TeamMembership, membership => membership.team)
    members: TeamMembership[];

    @ManyToOne(()=>Tournament)
    tournament: Tournament;
}