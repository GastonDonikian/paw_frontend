import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Field, Form, Formik } from 'formik';
import RegisterProfessor from '../../../Pages/Authentication/RegisterProfessor';
import {intl} from "../../../i18n/i18n";

jest.mock('axios');
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(), // Mock useNavigate
}));

describe('RegisterProfessor', () => {
    test('renders the email field component', () => {
        render(<RegisterProfessor />);
        expect(screen.getByTestId('email')).toBeInTheDocument();
    });

    test('renders the password field component', () => {
        render(<RegisterProfessor />);
        expect(screen.getByTestId('password')).toBeInTheDocument();
    });

    test('renders the repeat password field component', () => {
        render(<RegisterProfessor />);
        expect(screen.getByTestId('re-password')).toBeInTheDocument();
    });

    test('renders the name field component', () => {
        render(<RegisterProfessor />);
        expect(screen.getByTestId('name')).toBeInTheDocument();
    });

    test('renders the surname field component', () => {
        render(<RegisterProfessor />);
        expect(screen.getByTestId('surname')).toBeInTheDocument();
    });

    test('renders the phone field component', () => {
        render(<RegisterProfessor />);
        expect(screen.getByTestId('phone')).toBeInTheDocument();
    });

    test('renders the schedule field component', () => {
        render(<RegisterProfessor />);
        expect(screen.getByTestId('schedule')).toBeInTheDocument();
    });

    test('renders the studies field component', () => {
        render(<RegisterProfessor />);
        expect(screen.getByTestId('studies')).toBeInTheDocument();
    });

    test('renders the description field component', () => {
        render(<RegisterProfessor />);
        expect(screen.getByTestId('description')).toBeInTheDocument();
    });

    test('renders the location field component', () => {
        render(<RegisterProfessor />);
        expect(screen.getByTestId('location')).toBeInTheDocument();
    });

    test('renders the button component', () => {
        render(<RegisterProfessor />);
        expect(screen.getByRole('button', { name: intl.formatMessage({ id: 'register' }) })).toBeInTheDocument();
    });
});

