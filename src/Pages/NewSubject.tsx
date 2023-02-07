import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import {isVerified, login, getUserById, isAuthenticated} from '../Services/AuthHelper'
import {useEffect, useState} from "react";
import {Alert, Select} from "@mui/material";
import {RegisterStudentModel } from '../Models/Users/RegisterStudentModel'
import * as Yup from 'yup';
import {Form, Formik, Field, ErrorMessage} from "formik";
import {apiRegisterStudent} from "../Services/UserService";
import {apiLogin} from "../Services/Auth";


const theme = createTheme();

export default function NewSubject() {
    const navigate = useNavigate();
    useEffect(() => {
        if(isVerified())
            navigate('/verify')
        if((isAuthenticated()))
            navigate('/')
    }, [])
    const [badCredentials, setBadCredentials] = useState(false);
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const registerStudentFormik = {
        initialValues: {
            email: "",
            password: "",
            repeatPassword: "",
            name: "",
            surname: "",
            phoneNumber: ""
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().email("Not an email"),
            password: Yup.string()
                .min(8, "Password should be longer than 8 characters")
                .max(40, "Password should be shorter than 40 characters")
                .required("Password is required!"),
            repeatPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
            name: Yup.string()
                .min(3, "Name should be longer")
                .max(40, "Name should be shorter")
                .required("Name is required!"),
            surname: Yup.string()
                .min(3, "Surname should be longer")
                .max(40, "Surname should be shorter")
                .required("Surname is required!"),
            phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
        })
    }
    const handleSubmit = async (values: RegisterStudentModel) => {
        try {
            await apiRegisterStudent(values);
            await apiLogin(values.email,values.password);
            navigate('/verify');
        } catch (error: any) {
            setBadCredentials(true);
            navigate('/register')
        }
    }
    const onError = (error: string) => {
        if (error !== '')
            return (<div>{error}</div>)
        return (<br/>)
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="md">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 5,
                        marginBottom: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        bgcolor: 'white',
                        paddingTop: 2,
                        paddingLeft: 3,
                        paddingRight: 3,
                        paddingBottom: 3,
                        borderRadius: '5px',
                        boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'
                    }}
                >
                    <Typography component="h1" variant="h5">
                        New subject
                    </Typography>
                    <Formik {...registerStudentFormik} onSubmit={handleSubmit}>
                        {({values, errors}) => (
                            <Form>
                                {badCredentials ? <Alert severity="error">Something went wrong!</Alert> :
                                    <div></div>}
                                <Field
                                    as={TextField}
                                    margin="none"
                                    fullWidth
                                    id="email"
                                    helperText={onError(errors['email'] || '')}
                                    label="Email Address"
                                    name="email"
                                    disabled
                                    defaultValue="email@hola.com"
                                    size="small"
                                    sx={{mt:2}}
                                />
                                <Field
                                    as={TextField}
                                    margin="none"
                                    fullWidth
                                    id="name"
                                    helperText={onError(errors['name'] || '')}
                                    label="Subject"
                                    name="subject"
                                    size="small"
                                />
                                <Field
                                    as={Select}
                                    margin="none"
                                    fullWidth
                                    id="level"
                                    label="Level"
                                    name="level"
                                    size="small"
                                    sx={{mb:2}}
                                > 
                                </Field>
                                <Field
                                    as={Select}
                                    margin="none"
                                    fullWidth
                                    id="category"
                                    label="Category"
                                    name="category"
                                    size="small"
                                    sx={{mb:2}}
                                > 
                                </Field>
                                
                                <Field
                                    as={TextField}
                                    margin="none"
                                    fullWidth
                                    id="phoneNumber"
                                    helperText={onError(errors['phoneNumber'] || '')}
                                    label="Phone number"
                                    name="phoneNumber"
                                    size="small"
                                />
                                <Grid direction="row" justifyContent="flex-end"
  alignItems="center" sx={{display: 'flex'}}>

                                <Grid item>
                                <Button
                                    type="submit"
                                    
                                    variant="contained"
                                    sx={{ mb: 1, bgcolor: '#349AC2'}}
                                >
                                    Send
                                </Button></Grid></Grid>
                                
                            </Form>)}
                    </Formik>
                </Box>
            </Container>
        </ThemeProvider>
    );
}