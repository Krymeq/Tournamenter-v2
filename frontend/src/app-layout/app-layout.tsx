import React from 'react';
import { Navbar } from '../components/navbar/navbar';
import { AppRouting } from './app-routing';
import './layout.scss';

export const AppLayout: React.FunctionComponent = () => (
    <div className='root'>
        <Navbar/>
        <div className='main-content'>
            <AppRouting/>
        </div>
    </div>
)