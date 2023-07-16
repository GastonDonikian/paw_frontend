import React from 'react';
import { render, screen } from '@testing-library/react';
import FilterOrderBy from '../../../components/filter/FilterOrderBy';

describe('FilterOrderBy component', () => {
    test('renders the form correctly', () => {
        render(<FilterOrderBy/>);
        expect(screen.getByTestId('form')).toBeInTheDocument();
    });
});
