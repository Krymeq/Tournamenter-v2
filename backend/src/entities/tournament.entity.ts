import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { RankedType } from "./helpers/ranked-type";
import { Team } from "./team.entity";
import { Division } from "./division.entity";

@Entity()
export class Tournament {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    discipline: string;

    @Column({type: 'int', name: 'participants_number'})
    participants: number;

    @Column({type: 'int', name: 'team_size'})
    teamSize: number;

    @Column({name: 'start_date', nullable: true})
    startDate: Date;

    @Column()
    ranked: RankedType;
    
    @ManyToOne(() => User, user => user.hostedTournaments)
    @JoinColumn({name: 'host_id'})
    host: User;

    @OneToMany(() => Team, team => team.tournament)
    teams: Team[];

    @OneToMany(() => Division, division => division.tournament)
    divisions: Division[];
}