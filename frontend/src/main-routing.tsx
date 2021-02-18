import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppLayout } from './components/app-layout/app-layout';
import { LoginPage } from './pages/login/LoginPage';

export const MainRouting = () => {
    return (
    <Router>
        <Switch>
            <Route path='/login'>
                <LoginPage/>
            </Route>
            <Route path='/'>
                <AppLayout/>
            </Route>
        </Switch>
    </Router>);
}