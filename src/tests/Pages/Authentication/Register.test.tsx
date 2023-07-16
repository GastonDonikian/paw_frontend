import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Register from '../../../Pages/Authentication/Register';

describe('Register', () => {
    test('navigates to the professor registration page when clicking on the professor card', () => {
        render(<Register />);
        expect(screen.getByTestId('link-professor')).toHaveAttribute('href', '/registerProfessor');
    });

    test('navigates to the student registration page when clicking on the student card', () => {
        render(<Register />);
        expect(screen.getByTestId('link-student')).toHaveAttribute('href', '/registerStudent');
    });
});
