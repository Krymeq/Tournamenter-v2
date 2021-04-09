import React from 'react';
import { Color } from '../../../../../../entities/color.entity';
import { Team } from '../../../../../../entities/team.entity';
import './TeamTile.scss'

interface Props {
    team: Team;
}

const getGradient = (colors: Color[]) => {
    if (colors.length > 1)
        return { 
            backgroundImage: `radial-gradient(circle, ${colors.map(e => e.color).join(',')})`,
        }
    return { 
        backgroundColor: colors[0].color
    };
}

export const TeamTile = ({ team }: Props) => {
    return (
        <div className="team-tile-root">
            <div className="team-name">{team.name}</div>
            { team.members.map(member =>
                <div key={member.id} className="member-container">
                    <span className="nick">{member.nickname}</span>
                    {member.division &&
                        <span className="division" style={
                            getGradient(member.division.colors)
                        }>
                            {`${member.division.name} ${member.subdivision || ""}`}
                        </span>
                    }
                </div>
            )}
        </div>
    );
}