import React from 'react';
import { render, screen } from '@testing-library/react';
import ChatMessages from '../../../components/class/ChatMessages';

describe('ChatMessages component', () => {
    test('renders the list of messages', () => {
        render(<ChatMessages />);
        expect(screen.getByRole('list')).toBeInTheDocument();
    });
});
