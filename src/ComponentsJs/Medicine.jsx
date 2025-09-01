import React from 'react';
import '../ComponentsCss/Medicine.css';
import NavBar from '../ComponentsJs/NavBar';
import NavButton from '../ComponentsJs/NavButton';
import PictureDiv from '../ComponentsJs/PictureDiv';

const cards = [
  { 
    image: 'medPicture1.png', 
    textFront: '26 יחצ”בים', 
    textBack: 'יחצ"ב-יחידה צבאית בתי חולים המסגרת הארוגנית והסד\'כ המסייע לבתי החולים לשמירה על רציפות תפקודית במצבי החירום השונים'
  },
  { 
    image: 'medPicture2.png', 
    textFront: 'יחצ”בונים', 
    textBack: 'המסגרת הארוגנית והסד\'כ המסייע לבתי החולים לשמירה על רציפות תפקודית במצבי החירום השונים'
  },
  { 
    image: 'medPicture3.png', 
    textFront: '7 גר”פים', 
    textBack: 'גר\'פ- גדוד רפואה ייעוד- להוות מסגרת לבניין כוח והפעלת כוח לכוחות הרפואה המחוזיים כמענה רפואי בדרג ב (בתי חולים), סיוע אזרחי ורציפות תפקודית'
  },
  { 
    image: 'medPicture4.png', 
    textFront: '3 פל”רנים', 
    textBack: 'פלר\'נ- פלוגה רפואה ניידת המסגרת הארגונית והסד\'כ המעניק טיפול ומענה רפואי בדרג א\' במתארים קונבנציונלים ובמתארי חל"כ'
  },
  { 
    image: 'medPicture5.png', 
    textFront: 'גשד”ים', 
    textBack: 'גשד\'מ- גדוד שירותי הדם המטכלי אמון על תגבור תרומות הדם במרחב האזרחי בשעת חירום'
  },
  { 
    image: 'medPicture6.png', 
    textFront: 'ית”ם מד”א', 
    textBack: 'ית\'מ מד"א- יחידת תגבור מד"א בזמן חירום אמונה על שליחת חובשים לתגבר את כוחות מד"א ולתפוס כוננות יחד עם כוחות מד"א'
  },
];

function Medicine() {
  return (
    <div className="Medicine">
      <NavButton type="next" to="/LastPage" />
      <NavButton type="back" to="/PakarDistricts" />  
      <NavBar activeButton={4} className="navbar" />
      <h1 id='title-PakarHeadquarters'>לחץ על הכרטיסיה למידע נוסף</h1>

      <div id='cards-container'>
        {cards.map((card, idx) => (
          <div className="flip-card" key={idx}>
            <div className="flip-card-inner">
              {/* Front */}
              <div className="flip-card-front">
                <PictureDiv
                  imageSrc={`${process.env.PUBLIC_URL}/assets/${card.image}`}
                  text={card.textFront}
                />
              </div>
              {/* Back */}
              <div className="flip-card-back">
                <div className="back-content">
                  <div className="back-title-container">
                    <h3 className="back-title">הסבר:</h3>
                  </div>
                  <p>{card.textBack}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Medicine;
