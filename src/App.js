import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Intro from './ComponentsJs/Intro.jsx';
import Header from './ComponentsJs/Header.jsx';
import PakarVocation from './ComponentsJs/PakarVocation.jsx';
import Footer from './ComponentsJs/Footer.jsx';

function App() {
    return (
        <div className="App">
            <Header />
            <Footer />
            <Routes>
                <Route path="/" element={<Intro />} />
          <Route path="/PakarVocation" element={<PakarVocation />} />
            </Routes> 
        </div>
    );
}

function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}

export default AppWrapper;
