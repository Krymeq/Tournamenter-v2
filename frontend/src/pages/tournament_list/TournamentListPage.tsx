import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Pagination } from '../../entities/pagination.entity';
import { Tournament } from '../../entities/tournament.entity';
import { getTournaments } from '../../services/tournament/tournament.service';
import { TournamentTable } from './components/tournament-table/TournamentTable';
import './TournamentListPage.scss';

const useQuery = () => new URLSearchParams(useLocation().search)

export const TournamentListPage = () => {
    const query = useQuery();
    const page = parseInt(query.get('page') || '1');
    const [tournaments, setTournaments] = useState<Tournament[]>([]);
    const [pagination, setPagination] = useState<Pagination | undefined>(undefined);

    useEffect(() => {
        getTournaments(page)
        .then(res => {
            setTournaments(res.data.result);
            setPagination(res.data.pagination);
        });
    }, [page])
    
    return (
    <div className="tournament-list-root">
        <TournamentTable tournaments={tournaments}/>
    </div>);
}