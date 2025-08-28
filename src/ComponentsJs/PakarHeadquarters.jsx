import React from 'react';
import '../ComponentsCss/PakarHeadquarters.css';
import NavBar from '../ComponentsJs/NavBar';
import NavButton from '../ComponentsJs/NavButton';
import PictureDiv from '../ComponentsJs/PictureDiv';

function PakarHeadquarters () {
  return (
    <div className="PakarHeadquarters">
        <NavButton type="next" to="/CommandStructure" />
        <NavButton type="back" to="/AnimationMap" />  
        <NavBar activeButton={1} className="navbar" />
        <h1 id='title-PakarHeadquarters'>מפקדת הפיקוד</h1>
        <div id='pictures'>
            <PictureDiv
            imageSrc={`${process.env.PUBLIC_URL}/assets/picture1.png`}
            text='חפ"ק עורף לאומי משולב'
            />
            <PictureDiv
                imageSrc={`${process.env.PUBLIC_URL}/assets/picture2.png`}
                text='5 מחוזות'
            />
            <PictureDiv
                imageSrc={`${process.env.PUBLIC_URL}/assets/picture3.png`}
                text='20 נפות'
            />
            <PictureDiv
                imageSrc={`${process.env.PUBLIC_URL}/assets/picture4.png`}
                text='חטיבת החילוץ וההדרכה'
            />
            <PictureDiv
                imageSrc={`${process.env.PUBLIC_URL}/assets/picture5.png`}
                text='3 מפקדות משימתיות'
            />
            <PictureDiv
                imageSrc={`${process.env.PUBLIC_URL}/assets/picture6.png`}
                text='258 יקל"רים'
            />
        </div>
    </div>
  );
}

export default PakarHeadquarters;
