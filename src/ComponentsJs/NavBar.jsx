import React from "react";
import { useNavigate } from "react-router-dom";  // צריך React Router
import "../ComponentsCss/NavBar.css";

function NavBar({ activeButton }) {
  const navigate = useNavigate();

  // מערך הכפתורים + הנתיב לכל כפתור
  const buttons = [
    { label: "ייעוד פקע\"ר", path: "/PakarVocation" },
    { label: "התפיסה המבצעית", path: "/PakarRole" },
    { label: "מבנה הפיקוד", path: "/CommandStructure" },
    { label: "מחוזות פקע\"ר", path: "/PakarDistricts" },
    { label: "סד\"כ פקע\"ר רפואה", path: "/Medicine" }
  ];

  return (
    <div id="nav-bar">
      {buttons.map((btn, index) => (
        <div
          key={index}
          className="nav-bar-button"
          onClick={() => navigate(btn.path)}  // ניווט בעת לחיצה
        >
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
          <p>{btn.label}</p>
        </div>
      ))}
    </div>
  );
}

export default NavBar;
