import { Color } from "./color.entity";

export interface Division {
    id: number;
    name: string;
    subdivisions: number;
    ascending: boolean;
    colors: Color[];
}