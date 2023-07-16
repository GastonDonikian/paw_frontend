import React from 'react';
import { render, screen } from '@testing-library/react';
import FilterModality from '../../../components/filter/FilterModality';

describe('FilterModality component', () => {
    test('renders the form correctly', () => {
        render(<FilterModality/>);
        expect(screen.getByTestId('form')).toBeInTheDocument();
    });
});
