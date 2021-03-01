import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserInfo } from './user-info/user-info';
import { logout } from '../../services/auth/auth.service';
import { PowerSettingsNew } from '@material-ui/icons';
import logo from '../../assets/logo.svg';
import './navbar.scss';

const activeLinkStyle = {
    color: '#FFF',
}

export const Navbar = () => {
    return <div className="navbar-root">
        <div className="left-pane">
            <img src={logo} alt="Tournamenter"></img>
            <NavLink activeStyle={activeLinkStyle} exact to="/main">Strona główna</NavLink>
            <NavLink activeStyle={activeLinkStyle} exact to="/tournaments">Turnieje</NavLink>
        </div>
        <div className="right-pane">
            <UserInfo/>
            <NavLink to="/" onClick={() => logout()}>
                <PowerSettingsNew/>
            </NavLink>
        </div>
    </div>
}