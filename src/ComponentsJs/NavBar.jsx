import React from "react";
import "../ComponentsCss/NavBar.css";

function NavBar({ activeButton }) {
  const buttons = [
    "ייעוד פקע\"ר",
    "התפיסה המבצעית",
    "מבנה הפיקוד",
    "מחוזות פקע\"ר",
    "סד\"כ פקע\"ר רפואה"
  ];

  return (
    <div id="nav-bar">
      {buttons.map((label, index) => (
        <div key={index} className="nav-bar-button">
          {activeButton === index && (
            <>
              <img
                src={`${process.env.PUBLIC_URL}/assets/small-soldier.png`}
                alt="חייל קטן"
                className="small-soldier-image"
              />
              <div id="speech-bubble">אנחנו כאן</div>
              <div id="triangular"></div>
            </>
          )}
          <p>{label}</p>
        </div>
      ))}
    </div>
  );
}

export default NavBar;
