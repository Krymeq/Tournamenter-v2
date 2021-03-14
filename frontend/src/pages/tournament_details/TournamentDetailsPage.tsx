import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Team } from '../../entities/team.entity';
import { Tournament } from '../../entities/tournament.entity';
import { getTournamentDetails } from '../../services/tournament/tournament.service';
import { DetailBar } from './components/detail-bar/DetailBar';
import { MainPanel } from './components/main-panel/MainPanel';
import './TournamentDetailsPage.scss';

interface RouteParams {
    id: string;
}

export const TournamentDetailsPage = () => {
    const id = parseInt(useParams<RouteParams>()?.id);
    const [tournament, setTournament] = useState<Tournament | undefined>();
    const [teams, setTeams] = useState<Team[] | undefined>()
    useEffect(() => {
        getTournamentDetails(id)
            .then((res) => {
                setTournament(res.data.tournament);
                setTeams(res.data.teams);
            });
    }, [id])

    return (
        <div className="tournament-details-root">
            { tournament
                ? <DetailBar tournament={tournament} />
                : ""
            }
            { teams
                ? <MainPanel teams={teams}/>
                : ""
            }
        </div>)
}