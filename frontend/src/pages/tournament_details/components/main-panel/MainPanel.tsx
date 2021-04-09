import React from 'react';
import { TeamPane } from './team-pane/TeamPane';
import './MainPanel.scss';


export const MainPanel = () => {
    return (
        <div className="main-panel-root">
            <TeamPane/>
        </div>
    )
}