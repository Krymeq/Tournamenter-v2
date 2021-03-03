import React from 'react';
import { Tournament } from '../../../../entities/tournament.entity';
import { TournamentItem } from '../tournament-item/TournamentItem';
import './TournamentTable.scss';

interface Props {
    tournaments: Tournament[];
}

export const TournamentTable = ({ tournaments }: Props) => {
    return <div className="tournament-table-root">
        <div className="table-header">
            <span>Nazwa</span>
            <span>Dyscyplina</span>
            <span>Data startu</span>
        </div>
        {tournaments.map(e =>
            <TournamentItem key={e.id} tournament={e} />
        )}
    </div>
}