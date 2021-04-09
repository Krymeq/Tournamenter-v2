import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import logo from '../../assets/logo_with_text.svg';
import './RegisterPage.scss';
import { Link } from 'react-router-dom';


interface FormData {
    username: string,
    email: string,
    password: string,
    confirmPassword: string
}

const submitForm = (formData: FormData) => {
    console.log(formData);
}

export const RegisterPage = () => {
    return <div className="register-root">
        <Formik
            onSubmit={values => submitForm(values)}

            initialValues={{
                username: '',
                password: '',
                confirmPassword: '',
                email: ''
            }}

            validationSchema={Yup.object({
                username: Yup.string().required("Pole jest wymagane"),
                password: Yup.string().required("Pole jest wymagane")
                    .min(8, "Hasło musi mieć przynajmniej 8 znaków.")
                    .max(20, "Hasło musi mieć maksymalnie 20 znaków"),
                confirmPassword: Yup.string().required("Pole jest wymagane")
                    .oneOf([Yup.ref('password'), null], "Hasła muszą się zgadzać"),
                email: Yup.string().email("Adres e-mail musi być poprawny")
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
                    <label htmlFor="email">Adres e-mail</label>
                    <Field name="email" type="text" />
                    <span>
                        <ErrorMessage name="email" />
                    </span>
                </div>

                <div className="form-item">
                    <label htmlFor="password">Hasło</label>
                    <Field name="password" type="password" />
                    <span>
                        <ErrorMessage name="password" />
                    </span>
                </div>

                <div className="form-item">
                    <label htmlFor="confirmPassword">Powtórz hasło</label>
                    <Field name="confirmPassword" type="password" />
                    <span>
                        <ErrorMessage name="confirmPassword" />
                    </span>
                </div>
                <div className="button-pane">
                    <Link to='/login'>
                        <button className='secondary-button' type="button">Wróć</button>
                    </Link>
                    <button type="submit" className="primary-button">
                        Zarejestruj się
                    </button>
                </div>
            </Form>
        </Formik>
    </div>
}