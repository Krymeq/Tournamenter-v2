import axios from "axios";
import config from '../../config.json';
import { Pagination } from "../../entities/pagination.entity";
import { Tournament } from "../../entities/tournament.entity";

export const getTournaments = (page: number) => {
    return axios.get<{
        result: Tournament[], 
        pagination: Pagination
    }>(`${config.API_URL}/tournaments?page=${page}`, {withCredentials: true});
}