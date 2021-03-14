import { TeamMembership } from "./team-membership";

export interface Team {
    id: number;
    name: string;
    members: TeamMembership[];
}