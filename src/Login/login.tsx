import React from "react";
import * as Yup from "yup";
import {Formik, Form, Field, ErrorMessage} from "formik";
import style from './login.module.css'

const Login = () => (
    <div className={style.all}>
        <h1>Login</h1>
        <Formik
            initialValues={{email: "", password: "", rememberMe: false}}
            validate={values => {
                const errors = {email: ''};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values) => {
                console.log(values)
            }}
            validationSchema={loginFormSchema}>
            {() => (
                <Form>
                    <div>
                        <Field type={'text'} name={'email'} placeholder={'E-mail'}/>
                    </div>
                    <ErrorMessage className={style.error} name="email" component="div"/>

                    <div>
                        <Field type={'password'} name={'password'} placeholder={'Password'}/>
                    </div>
                    <ErrorMessage className={style.error} name="password" component="div"/>

                    <div>
                        <Field type={'checkbox'} name={'rememberMe'}/>
                        <label htmlFor={'rememberMe'}> Remember me </label>
                    </div>

                    <button type={'submit'}>Login</button>
                </Form>
            )}
        </Formik>
    </div>
);


const loginFormSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Must be longer than 2 characters")
        .max(20, "Nice try, nobody has a first name that long")
        .required("Required"),
    password: Yup.string()
        .min(8, "Must be longer than 8 characters")
        .required("Required")
});
export default Login;