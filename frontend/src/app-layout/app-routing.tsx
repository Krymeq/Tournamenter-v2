import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { TournamentListPage } from '../pages/tournament_list/TournamentListPage';
import { ProtectedRoute } from '../components/protected-route/protected-route';
import { MainPage } from '../pages/main/MainPage';
import { TournamentDetailsPage } from '../pages/tournament_details/TournamentDetails';

export const AppRouting: React.FunctionComponent = () => (
    <Switch>
        <ProtectedRoute exact path="/tournaments/:id">
            <TournamentDetailsPage/>
        </ProtectedRoute>
        <ProtectedRoute exact path="/tournaments">
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