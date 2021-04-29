import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Tournament } from "./tournament.entity";

@Entity()
@Unique("e-mail", ["email"])
@Unique("username", ["username"])
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    username: string;

    @Column({select: false})
    password: string;

    @OneToMany(()=>Tournament, tournament => tournament.host)
    hostedTournaments: Tournament[];
}

