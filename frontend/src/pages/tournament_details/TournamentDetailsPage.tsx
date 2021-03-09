import React from 'react';
import { useParams } from 'react-router-dom';
import { DetailBar } from './components/detail-bar/DetailBar';
import './TournamentDetailsPage.scss';

interface RouteParams {
    id: string;
}

export const TournamentDetailsPage = () => {
    const id = parseInt(useParams<RouteParams>()?.id);
    return( 
    <div className="tournament-details-root">
        <DetailBar tournamentId={id}/>
    </div>)
}