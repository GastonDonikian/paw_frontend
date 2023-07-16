import React from 'react';
import { render, screen } from '@testing-library/react';
import EmailHome from '../../../components/home/emailHome';

describe('emailHome component', () => {
    test('renders the avatar correctly', () => {
        render(<EmailHome/>);
        expect(screen.getByTestId('avatar')).toBeInTheDocument();
    });

    test('renders the card content correctly', () => {
        render(<EmailHome/>);
        expect(screen.getByTestId('card-content')).toBeInTheDocument();
    });
});
