import { RankedType } from "./ranked-type.enum";
import { UserData } from "./user-data.entity";

export interface Tournament {
    id: number;
    name: string;
    discipline: string;
    participants: number;
    teamSize: number;
    startDate: Date;
    ranked: RankedType;
    teamCount?: number;
    host?: UserData;
}