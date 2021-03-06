import { UserData } from '../../entities/user-data.entity';
import config from '../../config.json';
import Cookies from 'js-cookie';
import axios from 'axios';

export const authenticateUser = async (data: UserData) => {
    Cookies.remove('token');
    return await axios.post(`${config.API_URL}/user/login`, data, {withCredentials: true});
}

export const getUserInfo = (): UserData | undefined => {
    const payload = Cookies.get('token')?.split('.')[1];
    if (!payload) return undefined;
    else {
        const data = JSON.parse(atob(payload));
        return {email: data.email, username: data.username, id: data.id};
    }
}

export const logout = () => {
    Cookies.remove('token');
}

export const registerUser = async (data: UserData) => {
    return await axios.post(`${config.API_URL}/user/register`, data);
}