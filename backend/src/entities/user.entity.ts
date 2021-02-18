import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tournament } from "./tournament.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    email: string;

    @Column({unique: true})
    username: string;

    @Column({select: false})
    password: string;

    @OneToMany(()=>Tournament, tournament => tournament.host)
    hostedTournaments: Tournament[];
}