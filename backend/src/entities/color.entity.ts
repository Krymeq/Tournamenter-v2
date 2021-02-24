import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Division } from "./division.entity";

@Entity()
export class Color {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    color: string;

    @Column()
    layer: number;
    
    @ManyToOne(() => Division)
    @JoinColumn({name: 'division_id'})
    division: Division;
}