import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux/store';
import { TeamTile } from './team-tile/TeamTile';
import './TeamPane.scss';

export const TeamPane = () => {
    const teams = useSelector((state: RootState) => state.teams);
    
    return (
        <div className="team-pane-root">
            {teams.map(team => <TeamTile key= {team.id} team={team}/>)}
        </div>
    );
}