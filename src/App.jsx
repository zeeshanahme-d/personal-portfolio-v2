import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import AppWrapper from './AppWrapper';

function App() {
    return (
        <Router>
            <ThemeProvider>
                <AppWrapper />
            </ThemeProvider>
        </Router>
    );
}

export default App;
