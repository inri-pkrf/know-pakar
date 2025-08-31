import React from 'react';
import '../ComponentsCss/Medicine.css';
import NavBar from '../ComponentsJs/NavBar';
import NavButton from '../ComponentsJs/NavButton';

function Medicine() {
  return (
    <div className="Medicine">
        <NavButton type="next" to="/Medicine" />
        <NavButton type="back" to="/PakarDistricts" />  
        <NavBar activeButton={4} className="navbar" />
    </div>
  );
}

export default Medicine;
