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
            phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
            schedule: Yup.string()
                .max(30, "Schedule shouls be shorter"),
            studies: Yup.string()
                .min(4, "Studies should be longer")
                .max(40, "Studies should be shorter")
                .required(),
            description: Yup.string()
                .max(200, "Description should be shorter")
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
                        Register
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
                                    label="Email Address"
                                    name="email"
                                    autoFocus
                                />
                                <Field
                                    as={TextField}
                                    margin="none"
                                    fullWidth
                                    name="password"
                                    helperText={onError(errors['password'] || '')}
                                    label="Password"
                                    type="password"
                                    id="password"
                                    size="small"
                                />
                                <Field
                                    as={TextField}
                                    margin="none"
                                    fullWidth
                                    name="repeatPassword"
                                    helperText={onError(errors['repeatPassword'] || '')}
                                    label="Repeat password"
                                    type="password"
                                    id="repeatPassword"
                                    size="small"
                                />
                                <Field
                                    as={TextField}
                                    margin="none"
                                    fullWidth
                                    id="name"
                                    helperText={onError(errors['name'] || '')}
                                    label="Name"
                                    name="name"
                                    size="small"
                                />
                                <Field
                                    as={TextField}
                                    margin="none"
                                    fullWidth
                                    id="surname"
                                    helperText={onError(errors['surname'] || '')}
                                    label="Surname"
                                    name="surname"
                                    size="small"
                                />
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
                                <Field
                                    as={TextField}
                                    margin="none"
                                    fullWidth
                                    id="schedule"
                                    helperText={onError(errors['schedule'] || '')}
                                    label="Schedule"
                                    name="schedule"
                                    size="small"
                                />
                                <Field
                                    as={TextField}
                                    margin="none"
                                    fullWidth
                                    id="studies"
                                    helperText={onError(errors['studies'] || '')}
                                    label="Studies"
                                    name="studies"
                                    size="small"
                                />
                                <Field
                                    as={TextField}
                                    margin="none"
                                    fullWidth
                                    id="description"
                                    helperText={onError(errors['description'] || '')}
                                    label="Description"
                                    name="description"
                                    size="small"
                                />
                                <Field
                                    as={TextField}
                                    margin="none"
                                    fullWidth
                                    id="location"
                                    helperText={onError(errors['location'] || '')}
                                    label="Location"
                                    name="location"
                                    size="small"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{mt: 2, mb: 2, bgcolor: '#349AC2'}}
                                >
                                    Register
                                </Button>
                                <Grid container>
                                    <Grid item>
                                        <Link href="/registerStudent" variant="body2">
                                            {"Want to learn only? Click here"}
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