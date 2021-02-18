import React from 'react'
import { Redirect, Route } from 'react-router-dom';

interface Props {
    children: JSX.Element[] | JSX.Element;
    path: string;
}

export const ProtectedRoute = ({children, ...rest}: Props) => {
    let isValid = false; // here provide code to auth
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