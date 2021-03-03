import React from 'react';
import { Link } from 'react-router-dom';
import { Tournament } from '../../../../entities/tournament.entity';
import { dateToString } from '../../../../utils';
import './TournamentItem.scss';

interface Props {
    tournament: Tournament;
}

export const TournamentItem = ({tournament}: Props) => (
    <Link to={`/tournaments/${tournament.id}`}>
        <div className="tournament-item-root">
            <span>{tournament.name}</span>
            <span>{tournament.discipline}</span>
            <span>{dateToString(tournament.startDate)}</span>
        </div>
    </Link>
)