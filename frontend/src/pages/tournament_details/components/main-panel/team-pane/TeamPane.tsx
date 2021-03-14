import React from 'react';
import { Team } from '../../../../../entities/team.entity';
import { TeamTile } from './team-tile/TeamTile';
import './TeamPane.scss';

interface Props {
    teams: Team[];
}

export const TeamPane = ({teams}: Props) => {
    return (
        <div className="team-pane-root">
            {teams.map(team => <TeamTile key= {team.id} team={team}/>)}
        </div>
    );
}