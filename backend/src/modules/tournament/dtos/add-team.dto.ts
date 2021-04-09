import { IsNotEmpty } from "class-validator";
import { TeamMembership } from "src/entities/team-membership.entity";

export class AddTeamDto {
    @IsNotEmpty()
    name: string;
    members: TeamMembership[];
}