import React from 'react';
import '../ComponentsCss/PakarRole.css';
import NavBar from '../ComponentsJs/NavBar';
import { useNavigate } from 'react-router-dom';

function PakarRole () {
    const navigate = useNavigate();

    const goToBackPage = () => {
    navigate('/PakarVocation');
  };

  return (
    <div className="PakarRole">
        <NavBar activeButton={1} className="navbar" />
        <h1 id='title-pakar-role'>תפקיד פיקוד העורף</h1>
        <div id='text-box-pakar-role'>
            <p id='text-pakar-role'>פיקוד העורף יציל חיים, ימזער סיכון לפגיעה בנפש ובתשתיות חיוניות, יבטיח עם שותפיו במרחב האזרחי את היכולת העמידה והשירותים החיוניים במדינת ישראל, על מנת למנוע משבר שיאפיל על הישגי המערכה ולתרום לניצחון צה”ל</p>
        </div>
    <img 
        src={`${process.env.PUBLIC_URL}/assets/next-btn.png`} alt="next-btn" id="next-btn" className='next-btn' // onClick={goToNextPage}
    />
    <img 
        src={`${process.env.PUBLIC_URL}/assets/back-btn.png`} alt="back-btn" id="back-btn" className='back-btn' onClick={goToBackPage} />
    </div>
  );
}

export default PakarRole;
