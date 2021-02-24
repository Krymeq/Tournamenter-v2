import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Division } from "./division.entity";
import { Team } from "./team.entity";
import { User } from "./user.entity";

@Entity()
export class TeamMembership {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    nickname: string;

    @ManyToOne(() => User)
    @JoinColumn({name: 'user_id'})
    user: User;
    
    @ManyToOne(() => Team)
    @JoinColumn({name: 'team_id'})
    team: Team;

    // ranked system: team member has either division and 
    // subdivision, ranked points or none depending of tournament's ranked type
    @ManyToOne(() => Division)
    @JoinColumn({name: 'division_id'})
    division: Division;

    @Column({nullable: true})
    subdivision: number;
    
    @Column({nullable: true})
    points: number;
}