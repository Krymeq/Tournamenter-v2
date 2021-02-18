import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

export const AppRouting: React.FunctionComponent = () => (
    <Switch>
        <Route path="/fapp">
            <h1>FAAAAAAAAAAAAAAPPP</h1>
        </Route>
        <Route path='/'>
            <Redirect to="/login"/>
        </Route>
    </Switch>
)