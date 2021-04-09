import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { TeamMembership } from "./team-membership.entity";
import { Tournament } from "./tournament.entity";

@Entity()
export class Team {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    accessCode: string;

    @OneToMany(() => TeamMembership, membership => membership.team)
    members: TeamMembership[];

    @ManyToOne(()=>Tournament)
    @JoinColumn({name: 'tournament_id'})
    tournament: Tournament;
}