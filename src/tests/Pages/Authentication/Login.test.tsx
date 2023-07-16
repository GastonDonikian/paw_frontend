import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../../../Pages/Authentication/Login';
import {intl} from "../../../i18n/i18n";

jest.mock('axios');
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(), // Mock useNavigate
}));

describe('SignIn', () => {
    test('renders the Login component', () => {
        render(<Login />);
        expect(screen.getByTestId('login')).toBeInTheDocument();
    });

    test('renders the email field input', () => {
        render(<Login />);
        expect(screen.getByTestId("email")).toBeInTheDocument();
    });

    test('renders the password field input', () => {
        render(<Login />);
        const signInText = screen.getByTestId('password');
        expect(signInText).toBeInTheDocument();
    });

    test('renders the submit component', () => {
        render(<Login />);
        expect(screen.getByRole('button', { name: intl.formatMessage({ id: 'sign_in' }) })).toBeInTheDocument();
    });
});
