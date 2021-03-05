import React, { useEffect, useState } from 'react';
import { Pagination } from '../../entities/pagination.entity';
import { Tournament } from '../../entities/tournament.entity';
import { getTournaments } from '../../services/tournament/tournament.service';
import { PaginationControl } from './components/pagination-control/PaginationControl';
import { TournamentTable } from './components/tournament-table/TournamentTable';
import './TournamentListPage.scss';

export const TournamentListPage = () => {
    const [page, setPage] = useState(1);
    const [tournaments, setTournaments] = useState<Tournament[]>([]);
    const [pagination, setPagination] = useState<Pagination | undefined>(undefined);

    useEffect(() => {
        getTournaments(page)
            .then(res => {
                setTournaments(res.data.result);
                setPagination(res.data.pagination);
            });
    }, [page]);

    return (
        <div className="tournament-list-root">
            <PaginationControl
                setPage={setPage}
                currentPage={page}
                lastPage={Math.ceil((pagination?.total || 1) / (pagination?.itemsPerPage || 1))} />
            <TournamentTable tournaments={tournaments} />
        </div>);
}