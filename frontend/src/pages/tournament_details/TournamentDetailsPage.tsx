import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTournamentDetails } from '../../services/tournament/tournament.service';
import { DetailBar } from './components/detail-bar/DetailBar';
import { MainPanel } from './components/main-panel/MainPanel';
import './TournamentDetailsPage.scss';

interface RouteParams {
    id: string;
}

export const TournamentDetailsPage = () => {
    const dispatch = useDispatch();
    const id = parseInt(useParams<RouteParams>()?.id);
    useEffect(() => {
        getTournamentDetails(id)
            .then((res) => {
                dispatch({
                    type: 'teams/set', 
                    payload: res.data.teams
                });
                
                dispatch({
                    type: 'tournament/set', 
                    payload: res.data.tournament
                })
            });

        return function cleanup() {
            dispatch({type: 'teams/clear'});
            dispatch({type: 'tournament/clear'});
        }
    }, [id, dispatch])

    return (
        <div className="tournament-details-root">
            <DetailBar/>
            <MainPanel/>
        </div>)
}