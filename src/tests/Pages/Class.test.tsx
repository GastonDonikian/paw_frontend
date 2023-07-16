import React from 'react';
import { render, screen } from '@testing-library/react';
import Class from '../../Pages/Class';

describe('Class component', () => {
    test('renders the component correctly', () => {
        render(<Class />);
        expect(screen.getByTestId("schedule")).toBeInTheDocument();
    });
});
