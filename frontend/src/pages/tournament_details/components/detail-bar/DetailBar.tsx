import React from 'react';
import { getTournamentDetails } from '../../../../services/tournament/tournament.service';
import './DetailBar.scss';

interface Props {
    tournamentId: number;
}

export const DetailBar = ({ tournamentId }: Props) => {
    getTournamentDetails(tournamentId).then(res => console.log(res));

    return (
    <div className="detail-bar-root">
        <div className="header">
            Szczegóły
        </div>
    </div>
)}