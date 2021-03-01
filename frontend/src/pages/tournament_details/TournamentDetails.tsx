import React from 'react';
import { useParams } from 'react-router-dom';

interface RouteParams {
    id: string;
}

export const TournamentDetailsPage = () => {
    const id = parseInt(useParams<RouteParams>()?.id);
    return <div>HELLO FROM DI ODERSAJD {`${id}`}</div>
}