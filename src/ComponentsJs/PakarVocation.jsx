import React from 'react';
import '../ComponentsCss/PakarVocation.css';
import NavBar from '../ComponentsJs/NavBar';
import { useNavigate } from 'react-router-dom';

function PakarVocation() {
  const tabs = [
    { id: 0, text: 'ראש הג"א', img: 'orange-man.png' },
    { id: 1, text: `פקמ"ר`, img: 'green-man.png' },
    { id: 2, text: 'קצין חיל ראשי', img: 'blue-man.png' }
  ];

  const texts = [
    { id: 0, text: "שירות ההתגוננות האזרחית כהגדרתו בחוק" },
    { id: 1, text: "פיקוד מרחבי" },
    { id: 2, text: "סמכות מקצועית ראשית בנושאי ההתגוננות האזרחית, החילוץ וההצלה" }
  ]
    const navigate = useNavigate();

    const goToNextPage = () => {
    navigate('/PakarRole');
  };

  return (
    <div className="PakarVocation">
      <NavBar activeButton={0} className="navbar" />
      <h1 id='title'>העבר עכבר מעל הכרטיסייה למידע נוסף</h1>
      <img 
        src={`${process.env.PUBLIC_URL}/assets/next-btn.png`} 
        alt="next-btn" 
        id="next-btn" 
        className='next-btn'
        onClick={goToNextPage}
      />

      <div id='tabs'>
        {tabs.map((tab, index) => (   
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
                <div id='definition'>הגדרה:</div>
                <p>{texts[index].text}</p> 
            </div>
            </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default PakarVocation;
