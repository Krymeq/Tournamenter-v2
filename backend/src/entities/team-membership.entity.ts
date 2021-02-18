import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Team } from "./team.entity";
import { User } from "./user.entity";

@Entity()
export class TeamMembership {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User)
    user: User;
    
    @ManyToOne(() => Team)
    team: Team;
}