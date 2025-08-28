import React, { useState } from 'react';
import '../ComponentsCss/CommandControl.css';
import NavBar from '../ComponentsJs/NavBar';
import NavButton from '../ComponentsJs/NavButton';

function CommandControl() {
  const [openIndex, setOpenIndex] = useState(null);

  const buttons = [
    { label: "מאמץ הצלת חיים", text: "מזעור הנפגעים והנזק בעת אירוע בעורף" },
    { label: "מאמץ שגרת חירום", text: "סיוע בתפקוד משק המדינה ומוסדותיה וקיום שגרת חירום לתושביה במשך כל העימות" },
    { label: "מאמץ התמיכה בחזית", text: "סיוע למאמץ הלחימה בחזית" }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="CommandControl">
      <NavButton type="next" to="/AnimationMap" />
      <NavButton type="back" to="/PakarRole" />  
      <NavBar activeButton={1} className="navbar" />

      <h1 id='title-command-control'>פיקוד ושליטה</h1>
      <img 
        src={`${process.env.PUBLIC_URL}/assets/arrows-command-control.png`} 
        alt="arrows" 
        id="arrows"
        />

        <div id="info-buttons">
        {buttons.map((btn, index) => (
            <div 
            key={index} 
            className={`info-btn-container ${openIndex === index ? 'open' : ''}`}
            >
            <div className='info-btn' onClick={() => handleToggle(index)}>
                {btn.label}
            </div>
            <img src={`${process.env.PUBLIC_URL}/assets/arrow.png`} alt="arrow" id="arrow" />
            <p className="info-text">{btn.text}</p>
            </div>
        ))}
        </div>

    </div>
  );
}

export default CommandControl;
