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
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import {login} from "../../Services/AuthHelper";


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
            phoneNumber: Yup.string().matches(phoneRegExp, intl.formatMessage({id: 'error_phone_invalid'}))
                .max(10, intl.formatMessage({id: 'error_phone_shorter'}, {phone_max: '10'})),
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
            await login(values.email as string, values.password as string, false as boolean);
            navigate('/verify');
            window.location.reload()
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

    const locationOptions = [
        { value: 'All', label: intl.formatMessage({id: 'all'}) },
        { value: 'Agronomia', label: 'Agronomia' },
        { value: 'Almagro', label: 'Almagro' },
        { value: 'Balvanera', label: 'Balvanera' },
        { value: 'Barracas', label: 'Barracas' },
        { value: 'Belgrano', label: 'Belgrano' },
        { value: 'Boedo', label: 'Boedo' },
        { value: 'Caballito', label: 'Caballito' },
        { value: 'Chacarita', label: 'Chacarita' },
        { value: 'Coghlan', label: 'Coghlan' },
        { value: 'Colegiales', label: 'Colegiales' },
        { value: 'Constitucion', label: 'Constitucion' },
        { value: 'Flores', label: 'Flores' },
        { value: 'Floresta', label: 'Floresta' },
        { value: 'LaBoca', label: 'La Boca' },
        { value: 'LaPaternal', label: 'La Paternal' },
        { value: 'Liniers', label: 'Liniers' },
        { value: 'Mataderos', label: 'Mataderos' },
        { value: 'MonteCastro', label: 'Monte Castro' },
        { value: 'Montserrat', label: 'Montserrat' },
        { value: 'NuevaPompeya', label: 'Nueva Pompeya' },
        { value: 'Nunez', label: 'Nunez' },
        { value: 'Palermo', label: 'Palermo' },
        { value: 'ParqueAvellaneda', label: 'Parque Avellaneda' },
        { value: 'ParqueChacabuco', label: 'Parque Chacabuco' },
        { value: 'ParqueChas', label: 'Parque Chas' },
        { value: 'ParquePatricios', label: 'Parque Patricios' },
        { value: 'PuertoMadero', label: 'Puerto Madero' },
        { value: 'Recoleta', label: 'Recoleta' },
        { value: 'Retiro', label: 'Retiro' },
        { value: 'Saavedra', label: 'Saavedra' },
        { value: 'SanCristobal', label: 'San Cristobal' },
        { value: 'SanNicolas', label: 'San Nicolas' },
        { value: 'SanTelmo', label: 'San Telmo' },
        { value: 'VelezSarsfield', label: 'Velez Sarsfield' },
        { value: 'Versalles', label: 'Versalles' },
        { value: 'VillaCrespo', label: 'Villa Crespo' },
        { value: 'VillaDelParque', label: 'Villa Del Parque' },
        { value: 'VillaDevoto', label: 'Villa Devoto' },
        { value: 'VillaGeneralMitre', label: 'Villa General Mitre' },
        { value: 'VillaLugano', label: 'Villa Lugano' },
        { value: 'VillaLuro', label: 'Villa Luro' },
        { value: 'VillaOrtuzar', label: 'Villa Ortuzar' },
        { value: 'VillaPueyrredon', label: 'Villa Pueyrredon' },
        { value: 'VillaReal', label: 'Villa Real' },
        { value: 'VillaRiachuelo', label: 'Villa Riachuelo' },
        { value: 'VillaSantaRita', label: 'Villa Santa Rita' },
        { value: 'VillaSoldati', label: 'Villa Soldati' },
        { value: 'VillaUrquiza', label: 'Villa Urquiza' },
    ];

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
                                    data-testid="email"
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
                                    data-testid="password"
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
                                    data-testid="re-password"
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
                                    data-testid="name"
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
                                    data-testid="surname"
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
                                    data-testid="phone"
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
                                    data-testid="schedule"
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
                                    data-testid="studies"
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
                                    data-testid="description"
                                    helperText={onError(errors['description'] || '')}
                                    label={intl.formatMessage({ id: 'description' })}
                                    name="description"
                                    size="small"
                                />
                                <InputLabel>
                                    {intl.formatMessage({ id: 'location' })}
                                </InputLabel>
                                <Field
                                    as={Select}
                                    margin="none"
                                    fullWidth
                                    id="location"
                                    data-testid="location"
                                    helperText={onError(errors['location'] || '')}
                                    name="location"
                                    size="small"
                                >
                                    <MenuItem disabled>{intl.formatMessage({ id: 'location' })}</MenuItem>
                                    {locationOptions.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </Field>
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