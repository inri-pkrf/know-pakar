import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../ComponentsCss/NavButton.css';

function NavButton({ type, to }) {
  const navigate = useNavigate();
  const imgSrc = `${process.env.PUBLIC_URL}/assets/${type}-btn.png`;

  const handleClick = () => {
    if (type === "back" && !to) {
      navigate(-1); // הולך עמוד אחורה בהיסטוריה
    } else if (to) {
      navigate(to); // לנווט לכתובת שהוגדרה
    }
  };

  return (
    <img 
      src={imgSrc} 
      alt={`${type}-btn`} 
      className={`${type}-btn`} 
      onClick={handleClick} 
    />
  );
}

export default NavButton;
