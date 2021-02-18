import React from 'react';
import { Sidebar } from '../sidebar/sidebar';
import { AppRouting } from './app-routing';
import './layout.scss';

export const AppLayout: React.FunctionComponent = () => (
    <div className='root'>
        <Sidebar/>
        <AppRouting/>
    </div>
)