import React from 'react'
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from 'react-router-dom';
import {loginTC} from "../redux/auth-reducer";

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}


export const Login = () => {


    const isAuth = useSelector<any>(state => state.auth.isAuth)
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length <= 2) {
                errors.password = 'Invalid password';
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(loginTC(values))
            formik.resetForm()
        },
    })
    if (isAuth) {
        return <Redirect to={"/Profile"}/>
    }
    return <div style={{
        margin: "20px 0 0 50px",
        padding: "0 10px 10px 10px",
        border: "solid 1px black",
        display: "inline-block",
        borderRadius: "15px",
        backgroundColor: "gray"
    }}>
        <Grid container justifyContent={'left'}>
            <Grid item justifyContent={'center'}>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl>
                        <FormGroup>
                            <TextField style={{backgroundColor: "white", borderRadius: "5px"}} label="Email" margin="normal" {...formik.getFieldProps('email')}
                                       onBlur={formik.handleBlur}/>
                            {formik.touched.email && formik.errors.email ?
                                <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
                            <TextField style={{backgroundColor: "white", borderRadius: "5px"}} type="password" label="Password"
                                       margin="normal" {...formik.getFieldProps('password')} onBlur={formik.handleBlur}
                            />
                            {formik.touched.password && formik.errors.password ?
                                <div style={{color: 'red'}}>{formik.errors.password}</div> : null}
                            <FormControlLabel style={{backgroundColor: "white", borderRadius: "5px", margin: "3px"}} label={'Remember me'} control={<Checkbox onChange={formik.handleChange}
                                                                                       checked={formik.values.rememberMe}
                                                                                       name="rememberMe"/>}/>
                            <label>
                                <button type={'submit'} style={{
                                    margin: " 0 0 0 80px",
                                    backgroundColor: "dimgrey",
                                    color: "white",
                                    width: "75px",
                                    height: "25px",
                                    fontSize: "16px"
                                }}>
                                    Login
                                </button>
                            </label>
                            <div style={{textAlign: "center", opacity: "50%", padding: "5px 0 0 0", color: "white"}}>Don't forget to
                                turn on VPN
                            </div>
                            <div style={{textAlign: "center", opacity: "50%", padding: "5px 0 0 0", color: "white"}}>email:
                                rgrinkiv030924@gmail.com
                            </div>
                            <div style={{textAlign: "center", opacity: "50%", padding: "5px 0 0 0", color: "white"}}>password:
                                241713100
                            </div>
                        </FormGroup>
                    </FormControl>
                </form>
            </Grid>
        </Grid>
    </div>
}
