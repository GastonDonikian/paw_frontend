import React from 'react';
import { render, screen } from '@testing-library/react';
import MissingSubject from '../../../components/home/missingSubject';

describe('emailHome component', () => {
    test('renders the avatar correctly', () => {
        render(<MissingSubject/>);
        expect(screen.getByTestId('avatar')).toBeInTheDocument();
    });

    test('renders the card content correctly', () => {
        render(<MissingSubject/>);
        expect(screen.getByTestId('card-content')).toBeInTheDocument();
    });
});
