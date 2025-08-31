import React from 'react';
import '../ComponentsCss/CommandStructure.css';
import NavBar from '../ComponentsJs/NavBar';
import NavButton from '../ComponentsJs/NavButton';

function CommandStructure() {
  return (
    <div className="CommandStructure">
      <NavButton type="next" to="/PakarDistricts" />
      <NavButton type="back" to="/PakarHeadquarters" />  
      <NavBar activeButton={2} className="navbar" />
      
      <img src={`${process.env.PUBLIC_URL}/assets/structure.png`} alt="structure" id='structure' />
      <div className="box-group">
        <Box text="מפקד הפיקוד" />
      </div>
      <div className="box-group1">
          <Box text="דובר צה’’ל" />
          <Box text="יועץ משפטי" />
          <Box text="יועץ ארגוני" />
          <Box text="רמ”ט הפיקוד" />
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
          <Box text="חטיבת החילוץ וההדרכה" />
          <Box text="מחוז צפון" />
          <Box text="מחוז חיפה" />
          <Box text="מחוז דן" />
          <Box text="מחוז י-ם והמרכז" />
          <Box text="מחוז דרום" />
          <Box text="מכללה לאומית לאיתנות ישראלית" />
      </div>

      <div className="box-group4">
          <Box text="תכנון וקש”ח" />
          <Box text="ארגון" />
          <Box text="פיתוח" />
          <Box text="תוה”ד" />
      </div>

      <div className="box-group5">
          <Box text="בי”ס לפיקוד ומקצועות העורף" />
          <Box text="בא”פ" />
          <Box text="4 גדודים" />
          <Box text="בא”ח העורף" />

      </div>

      <div className="box-group6">
          <Box text="הכשרות" />
          <Box text="אימוני רשויות" />
          <Box text="מפקדות" />
      </div>


    </div>
  );
}

export default CommandStructure;

function Box({ text }) {
  return <div className="box">{text}</div>;
}
