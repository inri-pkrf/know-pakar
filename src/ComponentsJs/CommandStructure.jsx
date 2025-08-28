import React from 'react';
import '../ComponentsCss/CommandStructure.css';
import NavBar from '../ComponentsJs/NavBar';
import NavButton from '../ComponentsJs/NavButton';

function CommandStructure() {
  return (
    <div className="CommandStructure">
      <NavButton type="next" to="/CommandStructure" />
      <NavButton type="back" to="/PakarHeadquarters" />  
      <NavBar activeButton={2} className="navbar" />
    </div>
  );
}

export default CommandStructure;
