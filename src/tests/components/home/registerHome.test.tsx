import React from 'react';
import { render, screen } from '@testing-library/react';
import RegisterHome from '../../../components/home/registerHome';

describe('RegisterHome component', () => {
    test('renders the avatar correctly', () => {
        render(<RegisterHome/>);
        expect(screen.getByTestId('avatar')).toBeInTheDocument();
    });

    test('renders the card content correctly', () => {
        render(<RegisterHome/>);
        expect(screen.getByTestId('card-content')).toBeInTheDocument();
    });
});
