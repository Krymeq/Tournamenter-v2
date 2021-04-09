import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppLayout } from './app-layout/app-layout';
import { LoginPage } from './pages/login/LoginPage';
import { RegisterPage } from './pages/register/RegisterPage';

export const MainRouting = () => {
    return (
    <Router>
        <Switch>
            <Route path='/login'>
                <LoginPage/>
            </Route>
            <Route path='/register'>
                <RegisterPage/>
            </Route>
            <Route path='/'>
                <AppLayout/>
            </Route>
        </Switch>
    </Router>);
}