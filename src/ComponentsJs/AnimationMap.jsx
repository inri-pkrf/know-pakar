import React, { useEffect, useState } from 'react';
import '../ComponentsCss/AnimationMap.css';
import NavBar from '../ComponentsJs/NavBar';
import NavButton from '../ComponentsJs/NavButton';

function AnimationMap() {
  const maps = [
    { src: '/assets/agana-map.png', id: 'agana-map' },
    { src: '/assets/atraa-map.png', id: 'atraa-map' },
    { src: '/assets/itgonenut-map.png', id: 'itgonenut-map' },
    { src: '/assets/maane-map.png', id: 'maane-map' },
  ];

  const textMap = [
    { text: 'הגנ"א', id: 'agana-map' },
    { text: 'התרעה', id: 'atraa-map' },
    { text: 'התגוננות אזרחית', id: 'itgonenut-map' },
    { text: 'מענה אופרטיבי', id: 'maane-map' },
  ];

  const [visibleIndex, setVisibleIndex] = useState(-1);
  const [textVisibleIndex, setTextVisibleIndex] = useState(-1);

  useEffect(() => {
    setVisibleIndex(0); // מפה ראשונה מיד
    const animationDuration = 1000; // משך האנימציה ב-milliseconds

    let index = 1;
    const interval = setInterval(() => {
      setVisibleIndex(index);

      // מציגים את הטקסט של המפה הקודמת אחרי שהאנימציה שלה הסתיימה
      setTextVisibleIndex(index - 1);

      index++;
      if (index > maps.length) clearInterval(interval);
    }, animationDuration); // כל מפה מופיעה אחרי סיום האנימציה של הקודמת

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="AnimationMap">
      <NavButton type="next" to="/PakarHeadquarters" />
      <NavButton type="back" to="/CommandControl" />
      <NavBar activeButton={1} className="navbar" />

      <div className="maps-container">
        {maps.map((map, index) => {
          const textObj = textMap.find(t => t.id === map.id);
          return (
            <div key={map.id} className="map-with-text">
              <img
                src={`${process.env.PUBLIC_URL}${map.src}`}
                alt={map.id}
                className={`maps ${index <= visibleIndex ? 'animate-map' : ''}`}
                style={{
                  left: `calc(30vw + ${index * 2}vw)`,
                  top: `calc(20vh + ${index * 2}vh)`,
                  zIndex: index + 1,
                  '--index': index
                }}
              />
              {index <= visibleIndex && (
                <div
                  className={`map-text animate-text ${map.id} ${index === textVisibleIndex ? 'show-text' : ''}`}
                  style={{
                    left: `calc(57vw + ${index * 3}vw)`,
                    top: `calc(22vh + ${index * 5}vh - 3vh)`,
                    zIndex: index + 2
                  }}
                >
                  {textObj.text}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AnimationMap;
