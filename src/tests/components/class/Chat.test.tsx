import React from 'react';
import { render, screen, queryByAttribute } from '@testing-library/react';
import Chat from '../../../components/class/Chat';

describe('Chat component', () => {
    test('send message button enabled', () => {
        render(<Chat />);
        expect(screen.getByRole('button')).toBeEnabled();
    });

    test('renders the chat messages', () => {
       render(<Chat />);
       expect(screen.getByTestId('chatMessages')).toBeInTheDocument();
    });
});
