import React from 'react';
import { render, screen } from '@testing-library/react';
import RegisterStudent from '../../../Pages/Authentication/RegisterStudent';
import {intl} from "../../../i18n/i18n";

jest.mock('axios');
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(), // Mock useNavigate
}));

describe('RegisterStudent component', () => {
    test('renders the email field component', () => {
        render(<RegisterStudent />);
        expect(screen.getByTestId('email')).toBeInTheDocument();
    });

    test('renders the password field component', () => {
        render(<RegisterStudent />);
        expect(screen.getByTestId('password')).toBeInTheDocument();
    });

    test('renders the repeat password field component', () => {
        render(<RegisterStudent />);
        expect(screen.getByTestId('re-password')).toBeInTheDocument();
    });

    test('renders the name field component', () => {
        render(<RegisterStudent />);
        expect(screen.getByTestId('name')).toBeInTheDocument();
    });

    test('renders the surname field component', () => {
        render(<RegisterStudent />);
        expect(screen.getByTestId('surname')).toBeInTheDocument();
    });

    test('renders the phone field component', () => {
        render(<RegisterStudent />);
        expect(screen.getByTestId('phone')).toBeInTheDocument();
    });

    test('renders the button component', () => {
        render(<RegisterStudent />);
        expect(screen.getByRole('button', { name: intl.formatMessage({ id: 'register' }) })).toBeInTheDocument();
    });
});
