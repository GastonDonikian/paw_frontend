import React from 'react';
import { render, screen } from '@testing-library/react';
import NothingHere from '../../components/nothingHere';
import {intl} from "../../i18n/i18n";

describe('NothingHere component', () => {
    test('renders the component correctly', () => {
        render(<NothingHere/>);
        expect(screen.getByRole('heading', { name: intl.formatMessage({ id: 'nothing_here'})})).toBeInTheDocument();
    });

    test('renders the image correctly', () => {
        render(<NothingHere/>);
        expect(screen.getByRole('img')).toBeInTheDocument();
    });
});