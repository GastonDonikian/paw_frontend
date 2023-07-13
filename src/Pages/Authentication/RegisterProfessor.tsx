import * as React from 'react';
import {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useNavigate} from "react-router-dom";
import {Alert} from "@mui/material";
import * as Yup from 'yup';
import {Field, Form, Formik} from "formik";
import {apiRegisterProfessor} from "../../Services/UserService";
import {apiLogin} from "../../Services/Auth";
import {RegisterProfessorModel} from "../../Models/Users/RegisterProfessorModel";
import {intl} from "../../i18n/i18n";

import { InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";


function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function RegisterProfessor() {
    const navigate = useNavigate();


    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    const [showPassword2, setShowPassword2] = useState(false);
    const handleClickShowPassword2 = () => setShowPassword2(!showPassword2);
    const handleMouseDownPassword2 = () => setShowPassword2(!showPassword2);

    const [badCredentials, setBadCredentials] = useState(false);
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const registerProfessorFormik = {
        initialValues: {
            email: "",
            password: "",
            repeatPassword: "",
            name: "",
            surname: "",
            phoneNumber: "",
            schedule: "",
            studies: "",
            description: "",
            location: "",
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().email(intl.formatMessage({id: 'error_email_invalid'})),
            password: Yup.string()
                .min(8, intl.formatMessage({id: 'error_password_longer'}, { password_min: '8' }))
                .max(40, intl.formatMessage({id: 'error_password_shorter'}, {password_max: '40'}))
                .required(intl.formatMessage({id: 'error_password_required'})),
            repeatPassword: Yup.string().oneOf([Yup.ref('password'), null], intl.formatMessage({id: 'error_password_match'})),
            name: Yup.string()
                .min(3, intl.formatMessage({id: 'error_name_longer'}))
                .max(40, intl.formatMessage({id: 'error_name_shorter'}))
                .required(intl.formatMessage({id: 'error_name_required'})),
            surname: Yup.string()
                .min(3, intl.formatMessage({id: 'error_surname_longer'}))
                .max(40, intl.formatMessage({id: 'error_surname_shorter'}))
                .required(intl.formatMessage({id: 'error_surname_required'})),
            phoneNumber: Yup.string().matches(phoneRegExp, intl.formatMessage({id: 'error_phone_invalid'})),
            schedule: Yup.string()
                .max(30, intl.formatMessage({id: 'error_schedule_shorter'})),
            studies: Yup.string()
                .min(4, intl.formatMessage({id: 'error_studies_longer'}))
                .max(40, intl.formatMessage({id: 'error_studies_shorter'}))
                .required(),
            description: Yup.string()
                .max(200, intl.formatMessage({id: 'error_description_shorter'}))
        })
    }
    const handleSubmit = async (values: RegisterProfessorModel) => {
        try {
            await apiRegisterProfessor(values);
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
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
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
                    <Avatar sx={{m: 1, bgcolor: '#349AC2'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5" sx={{mb:3}}>
                        {intl.formatMessage({id: 'register'})}
                    </Typography>
                    <Formik {...registerProfessorFormik} onSubmit={handleSubmit}>
                        {({values, errors}) => (
                            <Form>
                                {badCredentials ? <Alert severity="error">Something went wrong!</Alert> :
                                    <div></div>}
                                <Field
                                    as={TextField}
                                    margin="none"
                                    fullWidth
                                    size="small"
                                    id="email"
                                    helperText={onError(errors['email'] || '')}
                                    label={intl.formatMessage({ id: 'email_address' })}
                                    name="email"
                                    autoFocus
                                />
                                <Field
                                    as={TextField}
                                    margin="none"
                                    fullWidth
                                    name="password"
                                    helperText={onError(errors['password'] || '')}
                                    label={intl.formatMessage({ id: 'password' })}
                                    
                                    id="password"
                                    size="small"
                                    type={showPassword ? "text" : "password"}
                                    InputProps={{ // <-- This is where the toggle button is added.
                                        endAdornment: (
                                          <InputAdornment position="end">
                                            <IconButton
                                              aria-label="toggle password visibility"
                                              onClick={handleClickShowPassword}
                                              onMouseDown={handleMouseDownPassword}
                                            >
                                              {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                          </InputAdornment>
                                        )
                                      }}
                                />
                                <Field
                                    as={TextField}
                                    margin="none"
                                    fullWidth
                                    name="repeatPassword"
                                    helperText={onError(errors['repeatPassword'] || '')}
                                    label={intl.formatMessage({ id: 'repeat_password' })}
                                    
                                    id="repeatPassword"
                                    size="small"
                                    type={showPassword2 ? "text" : "password"}
                                    InputProps={{ // <-- This is where the toggle button is added.
                                        endAdornment: (
                                          <InputAdornment position="end">
                                            <IconButton
                                              aria-label="toggle password visibility"
                                              onClick={handleClickShowPassword2}
                                              onMouseDown={handleMouseDownPassword2}
                                            >
                                              {showPassword2 ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                          </InputAdornment>
                                        )
                                      }}
                                />
                                <Field
                                    as={TextField}
                                    margin="none"
                                    fullWidth
                                    id="name"
                                    helperText={onError(errors['name'] || '')}
                                    label={intl.formatMessage({ id: 'name' })}
                                    name="name"
                                    size="small"
                                />
                                <Field
                                    as={TextField}
                                    margin="none"
                                    fullWidth
                                    id="surname"
                                    helperText={onError(errors['surname'] || '')}
                                    label={intl.formatMessage({ id: 'surname' })}
                                    name="surname"
                                    size="small"
                                />
                                <Field
                                    as={TextField}
                                    margin="none"
                                    fullWidth
                                    id="phoneNumber"
                                    helperText={onError(errors['phoneNumber'] || '')}
                                    label={intl.formatMessage({ id: 'phone_number' })}
                                    name="phoneNumber"
                                    size="small"
                                />
                                <Field
                                    as={TextField}
                                    margin="none"
                                    fullWidth
                                    id="schedule"
                                    helperText={onError(errors['schedule'] || '')}
                                    label={intl.formatMessage({ id: 'schedule' })}
                                    name="schedule"
                                    size="small"
                                />
                                <Field
                                    as={TextField}
                                    margin="none"
                                    fullWidth
                                    id="studies"
                                    helperText={onError(errors['studies'] || '')}
                                    label={intl.formatMessage({ id: 'studies' })}
                                    name="studies"
                                    size="small"
                                />
                                <Field
                                    as={TextField}
                                    margin="none"
                                    fullWidth
                                    id="description"
                                    helperText={onError(errors['description'] || '')}
                                    label={intl.formatMessage({ id: 'description' })}
                                    name="description"
                                    size="small"
                                />
                                <Field
                                    as={TextField}
                                    margin="none"
                                    fullWidth
                                    id="location"
                                    helperText={onError(errors['location'] || '')}
                                    label={intl.formatMessage({ id: 'location' })}
                                    name="location"
                                    size="small"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{mt: 2, mb: 2, bgcolor: '#349AC2'}}
                                >
                                    {intl.formatMessage({ id: 'register' })}
                                </Button>
                                <Grid container>
                                    <Grid item>
                                        <Link href="/registerStudent" variant="body2">
                                            {intl.formatMessage({ id: 'want_to_learn' })}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Form>)}
                    </Formik>
                </Box>
                <Copyright sx={{mt: 8, mb: 4}}/>
            </Container>
        </ThemeProvider>
    );
}