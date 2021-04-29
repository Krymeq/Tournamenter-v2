import React from 'react';
import { getUserInfo } from '../../../services/auth/user.service';
import './user-info.scss';

export const UserInfo = () => {
    const userInfo = getUserInfo();
    return (
        <div className="user-info-root">
            { userInfo?.username
            ? <div className="username">{userInfo.username}</div>
            : ""}

            { userInfo?.email
            ? <div className="email">{userInfo.email}</div>
            : ""}
        </div>
    )
}