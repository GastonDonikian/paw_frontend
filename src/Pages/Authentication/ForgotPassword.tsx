// ForgotPassword.tsx
import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { intl } from "../../i18n/i18n";

const theme = createTheme();

export default function ForgotPassword() {
    const [email, setEmail] = React.useState('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleResendEmail = async () => {
        // In a real-world scenario, you would send a request to your backend
        // to handle the password reset email sending logic.
        // For the sake of this example, we'll just log the email to the console.
        console.log('Resending email to:', email);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
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
                    <Typography component="h1" variant="h5" data-testid="forgot-password">
                        {intl.formatMessage({ id: 'forgot_password' })}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {intl.formatMessage({ id: 'reset_password_instructions' })}
                    </Typography>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label={intl.formatMessage({ id: 'email' })}
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, bgcolor: '#349AC2' }}
                        onClick={handleResendEmail}
                    >
                        {intl.formatMessage({ id: 'resend_email' })}
                    </Button>
                    <Link component={RouterLink} to="/login" variant="body2" sx={{marginTop: 2}}>
                        {intl.formatMessage({ id: 'back_to_login' })}
                    </Link>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
