import { render, screen, fireEvent } from '@testing-library/react';
import Files from '../../../components/class/Files';

describe('Files component', () => {
    test('renders file list', () => {
        render(<Files />);
        expect(screen.getByRole('list')).toBeInTheDocument();
    });

    test('handles delete dialog', () => {
        render(<Files />);
        fireEvent.click(screen.getByTestId('delete'));
        expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
});
