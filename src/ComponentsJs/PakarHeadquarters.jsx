import React from 'react';
import '../ComponentsCss/PakarHeadquarters.css';
import NavBar from '../ComponentsJs/NavBar';
import NavButton from '../ComponentsJs/NavButton';

function PakarHeadquarters () {
  return (
    <div className="PakarHeadquarters">
        <NavButton type="next" to="/PakarHeadquarters" />
        <NavButton type="back" to="/AnimationMap" />  
        <NavBar activeButton={1} className="navbar" />
        <h1 id='title-PakarHeadquarters'>מפקדת הפיקוד</h1>

    </div>
  );
}

export default PakarHeadquarters;
