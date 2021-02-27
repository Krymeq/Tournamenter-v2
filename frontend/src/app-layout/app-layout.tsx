import React from 'react';
import { Navbar } from '../components/navbar/navbar';
import { Sidebar } from '../components/sidebar/sidebar';
import { AppRouting } from './app-routing';
import './layout.scss';

export const AppLayout: React.FunctionComponent = () => (
    <div className='root'>
        <Navbar/>
        <div className='main-content'>
            <Sidebar/>
            <AppRouting/>
        </div>
    </div>
)