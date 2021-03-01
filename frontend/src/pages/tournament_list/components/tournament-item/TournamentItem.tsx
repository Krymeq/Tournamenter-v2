import React from 'react';
import { Tournament } from '../../../../entities/tournament.entity';
import './TournamentItem.scss';

interface Props {
    tournament: Tournament;
}

export const TournamentItem = ({tournament}: Props) => (
    <div className="tournament-item-root">
        <span>{tournament.name}</span>
    </div>
)