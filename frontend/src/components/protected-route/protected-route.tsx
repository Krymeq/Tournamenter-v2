import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import * as authService from '../../services/auth/auth.service';

interface Props {
    children: JSX.Element[] | JSX.Element;
    path: string;
}

export const ProtectedRoute = ({children, ...rest}: Props) => {
    let isValid = !!authService.getUserInfo();
    return <Route {...rest} 
        render={({location}) => isValid 
        ? children 
        : <Redirect 
            to={{
                pathname: '/login',
                state: {from: location}
            }} 
        />
    }/>
}