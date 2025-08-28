import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Intro from './ComponentsJs/Intro.jsx';
import Header from './ComponentsJs/Header.jsx';
import PakarVocation from './ComponentsJs/PakarVocation.jsx';
import Footer from './ComponentsJs/Footer.jsx';
import PakarRole from './ComponentsJs/PakarRole.jsx';
import CommandControl from './ComponentsJs/CommandControl.jsx'
import AnimationMap from './ComponentsJs/AnimationMap.jsx'
import PakarHeadquarters from './ComponentsJs/PakarHeadquarters.jsx'
import CommandStructure from './ComponentsJs/CommandStructure.jsx'

function App() {
    return (
        <div className="App">
            <Header />
            <Footer />
            <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="/PakarVocation" element={<PakarVocation />} />
                <Route path="/PakarRole" element={<PakarRole />} />
                <Route path="/CommandControl" element={<CommandControl />} />
                <Route path="/AnimationMap" element={<AnimationMap />} />
                <Route path="/PakarHeadquarters" element={<PakarHeadquarters />} />
                <Route path="/CommandStructure" element={<CommandStructure />} />
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
