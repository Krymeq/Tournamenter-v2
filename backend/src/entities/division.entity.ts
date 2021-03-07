import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Color } from "./color.entity";
import { Tournament } from "./tournament.entity";

@Entity()
export class Division {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({name: 'number_of_subdivisions'})
    subdivisions: number;

    @Column({name: 'is_order_ascending'})
    ascending: boolean;

    @OneToMany(()=>Color, color => color.division)
    colors: Color[]

    @ManyToOne(()=>Tournament, tournament => tournament.divisions)
    @JoinColumn({name: 'tournament_id'})
    tournament: Tournament;
}