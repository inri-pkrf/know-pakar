import React from 'react';
import '../ComponentsCss/PakarVocation.css';
import NavBar from '../ComponentsJs/NavBar';

function PakarVocation() {
  const tabs = [
    { id: 0, text: 'ראש הג"א', img: 'orange-man.png' },
    { id: 1, text: `פקמ"ר`, img: 'green-man.png' },
    { id: 2, text: 'קצין חיל ראשי', img: 'blue-man.png' }
  ];

  return (
    <div className="PakarVocation">
      <NavBar activeButton={0} className="navbar" />
      <img 
        src={`${process.env.PUBLIC_URL}/assets/next-btn.png`} 
        alt="next-btn" 
        id="next-btn" 
        className='next-btn'
      />

      <div id='tabs'>
        {tabs.map(tab => (
          <div key={tab.id} className="info-tab">
            <div className="flip-card-inner">
              {/* צד קדמי */}
              <div className="card-front">
                <div className="tab-text-wrapper">
                  <p className='tab-text'>{tab.text}</p>
                </div>
                <img 
                  src={`${process.env.PUBLIC_URL}/assets/${tab.img}`} 
                  alt={tab.text} 
                  className='man-pic'
                />
              </div>

              {/* צד אחורי */}
              <div className="card-back">
                <h2>{tab.text}</h2>
                <p>כאן ניתן להוסיף תוכן חדש או קומפוננטות נוספות</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PakarVocation;
