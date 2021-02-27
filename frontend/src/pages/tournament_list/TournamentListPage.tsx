import React from 'react';
import { useLocation } from 'react-router-dom';

const useQuery = () => new URLSearchParams(useLocation().search)

export const TournamentListPage = () => {
    const query = useQuery();
    console.log(parseInt(query.get('page') || '1'));
    return <div>hello there</div>
}