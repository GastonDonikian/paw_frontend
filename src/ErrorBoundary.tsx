import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    errorType: number | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { errorType: null };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        if (error.message.includes('403')) {
            return { errorType: 403 };
        } else if (error.message.includes('404')) {
            return { errorType: 404 };
        } else {
            return { errorType: 500 };
        }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        // Log the error to an error reporting service if needed
        console.error('Error caught by ErrorBoundary:', error, errorInfo);
    }

    render() {
        const { errorType } = this.state;

        if (errorType === 403) {
            // Redirect to the 403 error page
            return <Navigate to="/error403" />;
        } else if (errorType === 404) {
            // Redirect to the 404 error page
            return <Navigate to="/error404" />;
        } else if (errorType === 500) {
            // Redirect to the 500 error page
            return <Navigate to="/error500" />;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
