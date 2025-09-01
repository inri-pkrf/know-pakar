import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../ComponentsCss/NavBar.css";

function NavBar({ activeButton }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // מצב פתיחה/סגירה לטלפון

  const buttons = [
    { label: "ייעוד פקע\"ר", path: "/PakarVocation" },
    { label: "התפיסה המבצעית", path: "/PakarRole" },
    { label: "מבנה הפיקוד", path: "/CommandStructure" },
    { label: "מחוזות פקע\"ר", path: "/PakarDistricts" },
    { label: "סד\"כ פקע\"ר רפואה", path: "/Medicine" }
  ];

  return (
    <>
      {/* כפתור פתיחה רק למסכים קטנים */}
      <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <div id="nav-bar" className={isOpen ? "open" : ""}>
        {buttons.map((btn, index) => (
          <div
            key={index}
            className="nav-bar-button"
            onClick={() => {
              navigate(btn.path);
              setIsOpen(false); // סוגר את ה-navbar אחרי לחיצה
            }}
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
    </>
  );
}

export default NavBar;
