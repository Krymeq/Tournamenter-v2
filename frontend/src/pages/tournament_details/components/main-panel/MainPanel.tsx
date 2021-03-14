import React from 'react';
import { Team } from '../../../../entities/team.entity';
import { TeamPane } from './team-pane/TeamPane';
import './MainPanel.scss';

interface Props {
    teams: Team[];
}

export const MainPanel = ({teams}: Props) => {
    return (
        <div className="main-panel-root">
            <TeamPane teams={teams}/>
        </div>
    )
}