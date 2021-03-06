import axios from "axios";
import config from '../../config.json';
import { Pagination } from "../../entities/pagination.entity";
import { Team } from "../../entities/team.entity";
import { Tournament } from "../../entities/tournament.entity";

export const getTournaments = (page: number) => {
    return axios.get<{
        result: Tournament[],
        pagination: Pagination
    }>(`${config.API_URL}/tournaments?page=${page}`, { withCredentials: true });
}

export const getTournamentDetails = (id: number) => {
    return axios.get<{ 
        tournament: Tournament,
        teams: Team[] 
    }>(`${config.API_URL}/tournaments/${id}`, { withCredentials: true });
}