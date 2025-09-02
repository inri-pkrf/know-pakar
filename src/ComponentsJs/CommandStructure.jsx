// CommandStructure.jsx
import React, { useState, useEffect } from 'react';
import '../ComponentsCss/CommandStructure.css';
import NavBar from '../ComponentsJs/NavBar';
import NavButton from '../ComponentsJs/NavButton';

function CommandStructure() {
  const [showBox4, setShowBox4] = useState(false);
  const [showBox5, setShowBox5] = useState(false);
  const [showBox6, setShowBox6] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="CommandStructure">
      <NavButton type="next" to="/PakarDistricts" />
      <NavButton type="back" to="/PakarHeadquarters" />  
      <NavBar activeButton={2} className="navbar" />
      
      <img src={`${process.env.PUBLIC_URL}/assets/structure.png`} alt="structure" id='structure' />
      <img src={`${process.env.PUBLIC_URL}/assets/structure-mobile.png`} alt="structure-mobile" id='structure-mobile' />
      <h1 id='title-structure'>מבנה הפיקוד</h1>

      <div className="box-group">
        <Box text="מפקד הפיקוד" />
      </div>

      <div className="box-group1">
          <Box text="דובר צה’’ל" />
          <Box text="יועץ משפטי" />
          <Box text="יועץ ארגוני" />
          {/* רמ"ט הפיקוד - במובייל פותח את box-group4 */}
          <Box 
            text="רמ”ט הפיקוד" 
            onClick={() => isMobile && setShowBox4(!showBox4)} 
          />
      </div>

      <div className="box-group2">
          <Box text="מיגון" />
          <Box text="אוכלוסייה" />
          <Box text="רפואה" />
          <Box text="תקציבים" />
          <Box text="תקשוב והתרעה" />
          <Box text="משא”ן" />
          <Box text="לוגיסטיקה" />
          <Box text="מודיעין" />
          <Box text="אג”ם" />
          <Box text="נציג מ”י" />
      </div>

      <div className="box-group3">
          <Box 
            text="חטיבת החילוץ וההדרכה" 
            onClick={() => isMobile && setShowBox5(!showBox5)} 
          />
          <Box text="מחוז צפון" />
          <Box text="מחוז חיפה" />
          <Box text="מחוז דן" />
          <Box text="מחוז י-ם והמרכז" />
          <Box text="מחוז דרום" />
          <Box 
            text="מכללה לאומית לאיתנות ישראלית" 
            onClick={() => isMobile && setShowBox6(!showBox6)} 
          />
      </div>

      {/* קופסאות שמופיעות תמיד במסך רגיל, ורק בלחיצה במובייל */}
      {(!isMobile || showBox4) && (
        <div className="box-group4">
          <Box text="תכנון וקש”ח" />
          <Box text="ארגון" />
          <Box text="פיתוח" />
          <Box text="תוה”ד" />
        </div>
      )}

      {(!isMobile || showBox5) && (
        <div className="box-group5">
          <Box text="בי”ס לפיקוד ומקצועות העורף" />
          <Box text="בא”פ" />
          <Box text="4 גדודים" />
          <Box text="בא”ח העורף" />
        </div>
      )}

      {(!isMobile || showBox6) && (
        <div className="box-group6">
          <Box text="הכשרות" />
          <Box text="אימוני רשויות" />
          <Box text="מפקדות" />
        </div>
      )}
    </div>
  );
}

export default CommandStructure;

function Box({ text, onClick }) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    if (onClick) onClick();
  };

  return (
    <div className={`box ${active ? "active" : ""}`} onClick={handleClick}>
      {text}
    </div>
  );
}
