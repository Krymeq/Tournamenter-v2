import React from 'react';
import './DetailItem.scss';
interface Props {
    label: string;
    value?: string;
    children?: JSX.Element[] | JSX.Element;
}

export const DetailItem = ({label, value, children}: Props) => {
    return <div className="detail-item-root">
        <div className="label">
            {label}
        </div>
        {value || 
        <div className="value">
            {value}
        </div>}
        {children || {
            children
        }}
    </div>
}