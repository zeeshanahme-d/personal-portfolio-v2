import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import "./index.css";
import AppWrapper from './AppWrapper';

function App() {
    return (
        <Router>
            <AppWrapper />
        </Router>
    );
}

export default App;
