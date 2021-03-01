import { RankedType } from "./ranked-type.enum";

export interface Tournament {
    id: number;
    name: string;
    discipline: string;
    participants: number;
    teamSize: number;
    startDate: Date;
    ranked: RankedType;
}