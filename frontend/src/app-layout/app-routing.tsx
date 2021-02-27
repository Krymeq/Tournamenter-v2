import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { TournamentListPage } from '../pages/tournament_list/TournamentListPage';
import { ProtectedRoute } from '../components/protected-route/protected-route';
import { MainPage } from '../pages/main/MainPage';

export const AppRouting: React.FunctionComponent = () => (
    <Switch>
        <ProtectedRoute path="/xdxd">
            <div>huehuehue</div>
        </ProtectedRoute>
        <ProtectedRoute path="/tournaments">
            <TournamentListPage/>
        </ProtectedRoute>
        <ProtectedRoute path="/main">
            <MainPage/>
        </ProtectedRoute>
        <Route path='/'>
            <Redirect to="/tournaments"/>
        </Route>
    </Switch>
)