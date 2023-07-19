import * as React from 'react';
import {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useNavigate} from "react-router-dom";
import {isVerified, login} from '../../Services/AuthHelper'
import {Alert} from "@mui/material";
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

export default function SignIn() {
    const [rememberMe, setRememberMe] = React.useState(false);
    const [userNotVerified, setUserNotVerified] = useState(false);
    const [badCredentials, setBadCredentials] = useState(false);
    const navigate = useNavigate();


    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let authenticationData;
        try {
            await login(data.get('email') as string, data.get('password') as string, rememberMe as boolean);
            if(isVerified())
                navigate('/');
            else navigate('/verify');
        } catch(error: any) {
            if(error.response){
                if(error.response.status === 401){
                    setBadCredentials(true);
                    setUserNotVerified(false);
                } else if(error.response.status ===  403){
                    setUserNotVerified(true);
                    setBadCredentials(false);
                    navigate("/verify");
                }
            } else {
                console.log('Should have casual server is down...');
            }
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
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
                    <Avatar sx={{ m: 1, bgcolor: '#349AC2' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" data-testid="login">
                        {intl.formatMessage({ id: 'sign_in' })}
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        {badCredentials ? (<Alert severity="error">{intl.formatMessage({ id: 'error_user_password' })}</Alert>) : userNotVerified ? (
                            <Alert severity="error">{intl.formatMessage({ id: 'user_not_verified' })}</Alert>) : (<></>)}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            data-testid="email"
                            id="email"
                            label={intl.formatMessage({ id: 'email' })}
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            data-testid="password"
                            name="password"
                            label={intl.formatMessage({ id: 'password' })}
                            
                            id="password"
                            autoComplete="current-password"
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
                        <FormControlLabel
                            onChange={() => setRememberMe(!rememberMe)}
                            control={<Checkbox value="remember" color="primary" />}
                            label={intl.formatMessage({ id: 'remember_me' })}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, bgcolor: '#349AC2' }}
                            
                        >
                            {intl.formatMessage({ id: 'sign_in' })}
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="forgotpassword" variant="body2">
                                    {intl.formatMessage({ id: 'forgot_password' })}
                                </Link>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item>
                                <Link href="register" variant="body2">
                                    {intl.formatMessage({ id: 'dont_have_account' })}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}