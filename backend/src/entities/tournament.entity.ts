import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { RankedType } from "./ranked-type";
import { Team } from "./team.entity";

@Entity()
export class Tournament {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    discipline: string;

    @Column({type: 'int', name: 'participants_number'})
    participantsNumber: number;

    @Column({type: 'int', name: 'team_size'})
    teamSize: number;

    @Column({name: 'start_date'})
    startDate: Date;

    @Column()
    ranked: RankedType;
    
    @ManyToOne(() => User)
    @JoinColumn({name: 'host_id'})
    host: User;

    @OneToMany(() => Team, team => team.tournament)
    teams: Team[];
}