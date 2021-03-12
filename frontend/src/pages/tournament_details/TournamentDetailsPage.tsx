import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tournament } from '../../entities/tournament.entity';
import { getTournamentDetails } from '../../services/tournament/tournament.service';
import { DetailBar } from './components/detail-bar/DetailBar';
import './TournamentDetailsPage.scss';

interface RouteParams {
    id: string;
}

export const TournamentDetailsPage = () => {
    const id = parseInt(useParams<RouteParams>()?.id);
    const [tournament, setTournament] = useState<Tournament | undefined>(undefined);
    
    useEffect(() => {
        getTournamentDetails(id)
        .then((res) => {
            setTournament(res.data.tournament);  
        });
    }, [id])

    return( 
    <div className="tournament-details-root">
        { tournament 
           ? <DetailBar tournament={tournament}/>
           : "" 
        }
    </div>)
}