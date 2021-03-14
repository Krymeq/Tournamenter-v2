import { Division } from "./division.entity";

export interface TeamMembership {
    id: number;
    nickname: string;
    subdivision?: number;
    points?: number;
    division?: Division;
}