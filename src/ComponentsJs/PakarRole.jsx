import React from 'react';
import '../ComponentsCss/PakarRole.css';
import NavBar from '../ComponentsJs/NavBar';
import NavButton from '../ComponentsJs/NavButton';

function PakarRole () {
  return (
    <div className="PakarRole">
        <NavButton type="next" to="/CommandControl" />
        <NavButton type="back" to="/PakarVocation" />  
        <NavBar activeButton={1} className="navbar" />
        <h1 id='title-pakar-role'>תפקיד פיקוד העורף</h1>
        <div id='text-box-pakar-role'>
            <p id='text-pakar-role'>פיקוד העורף יציל חיים, ימזער סיכון לפגיעה בנפש ובתשתיות חיוניות, יבטיח עם שותפיו במרחב האזרחי את היכולת העמידה והשירותים החיוניים במדינת ישראל, על מנת למנוע משבר שיאפיל על הישגי המערכה ולתרום לניצחון צה”ל</p>
        </div>
    </div>
  );
}

export default PakarRole;
