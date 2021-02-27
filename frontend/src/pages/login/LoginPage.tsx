import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserData } from '../../services/auth/auth.interfaces';
import logo from '../../assets/logo_with_text.svg';
import React from 'react';
import * as authService from '../../services/auth/auth.service';
import * as Yup from 'yup';
import './LoginPage.scss';

interface LocationState {
    from: {
        pathname: string;
    };
}

export const LoginPage = () => {
    const history = useHistory();
    const location = useLocation<LocationState>();

    const submitForm = (formState: UserData) => {
        let { from } = location.state || { from: { pathname: '/' } };
        authService.authenticateUser(formState).then(() => history.push(from));
    }

    return (
        <div className="login-root">
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={values => submitForm(values)}
                validationSchema={Yup.object({
                    username: Yup.string().required('Pole jest wymagane'),
                    password: Yup.string().required('Pole wymagane')
                })}>
                <Form>
                    <img src={logo} alt="Turniejownik" />
                    <div className="form-item">
                        <label htmlFor="username">Nazwa użytkownika</label>
                        <Field name="username" type="text" />
                        <span>
                            <ErrorMessage name="username" />
                        </span>
                    </div>

                    <div className="form-item">
                        <div className="label-pane">
                            <label htmlFor="password">Hasło</label>
                            <Link to="/">Zapomniałeś hasła?</Link>
                        </div>
                        <Field name="password" type="password" />
                        <span>
                            <ErrorMessage name="password" />
                        </span>
                    </div>

                    <div className="button-pane">
                        <Link to='/'><button className='secondary-button'>Zarejestruj się</button></Link>
                        <button type="submit" className='primary-button'>Zaloguj się</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}