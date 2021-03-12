import React from 'react';
import { Tournament } from '../../../../entities/tournament.entity';
import { dateToString } from '../../../../utils';
import { DetailItem } from './detail-item/DetailItem';
import './DetailBar.scss';

interface Props {
    tournament: Tournament;
}

export const DetailBar = ({ tournament }: Props) => {
    return (
    <div className="detail-bar-root">
        <div className="header">
            Szczegóły
        </div>
            <DetailItem label="Nazwa" value={tournament?.name}/>
            <DetailItem label="Dyscyplina" value={tournament?.discipline}/>
            <DetailItem label="Uczestnicy" value={`${tournament?.teamCount}/${tournament?.participants}`}/>
            <DetailItem label="Prowadzony przez:">
                <DetailItem label="Użytkownik" value={tournament?.host?.username}/>
                <DetailItem label="e-mail" value={tournament?.host?.email}/>
            </DetailItem>
            <DetailItem label="Data startu" value={dateToString(tournament?.startDate)}/>
    </div>
)}