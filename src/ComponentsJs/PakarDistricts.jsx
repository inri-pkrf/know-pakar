import React from 'react';
import '../ComponentsCss/PakarDistricts.css';
import NavBar from '../ComponentsJs/NavBar';
import NavButton from '../ComponentsJs/NavButton';
import DistrictBubble from '../ComponentsJs/DistrictBubble';

function PakarDistricts() {
  return (
    <div className="PakarDistricts">
      <NavButton type="next" to="/Medicine" />
      <NavButton type="back" to="/CommandStructure" />  
      <NavBar activeButton={3} className="navbar" />

      <h1 id='title-PakarDistricts'>לחץ על מחוז למידע נוסף</h1>

      <div className="map-container">
        <img 
          src={`${process.env.PUBLIC_URL}/assets/districts-map.png`} 
          alt="districts-map" 
          id='districts-map'
        />

        {/* מחוז הדרום */}
        <div className="district-wrapper" style={{ top: '60%', left: '22%', width: '35%' }}>
          <img 
            src={`${process.env.PUBLIC_URL}/assets/daromn-map.png`} 
            alt="daromn-map" 
            className="maps-button" 
          />
          <div className="bubble-container" style={{ top: '-25%', left: '-180%' }}>
            <DistrictBubble
              image={`${process.env.PUBLIC_URL}/assets/darom-logo.png`}
              title="מחוז דרום:"
              line1="38 רשויות"
              line2="1,272,302 תושבים"
            />
          </div>
        </div>

        {/* מחוז המרכז */}
        <div className="district-wrapper" style={{ top: '41%', left: '25%', width: '32%' }}>
          <img 
            src={`${process.env.PUBLIC_URL}/assets/merkaz-map.png`} 
            alt="merkaz-map" 
            className="maps-button" 
          />
          <div className="bubble-container" style={{ top: '-50%', left: '-210%' }}>
            <DistrictBubble
              image={`${process.env.PUBLIC_URL}/assets/merkaz-logo.png`}
              title="מחוז י-ם והמרכז:"
              line1="33 רשויות"
              line2="2,602,926 תושבים"
            />
          </div>
        </div>

        {/* מחוז דן */}
        <div className="district-wrapper" style={{ top: '33%', left: '40%', width: '14%' }}>
          <img 
            src={`${process.env.PUBLIC_URL}/assets/dan-map.png`} 
            alt="dan-map" 
            className="maps-button" 
          />
          <div className="bubble-container" style={{ top: '-50%', left: '-480%' }}>
            <DistrictBubble
              image={`${process.env.PUBLIC_URL}/assets/dan-logo.png`}
              title="מחוז דן:"
              line1="37 רשויות"
              line2="2,501,647 תושבים"
            />
          </div>
        </div>

        {/* מחוז חיפה */}
        <div className="district-wrapper" style={{ top: '16%', left: '35%', width: '31%' }}>
          <img 
            src={`${process.env.PUBLIC_URL}/assets/haifa-map.png`} 
            alt="haifa-map" 
            className="maps-button" 
          />
          <div className="bubble-container" style={{ top: '-30%', left: '-220%' }}>
            <DistrictBubble
              image={`${process.env.PUBLIC_URL}/assets/haifa-logo.png`}
              title="מחוז חיפה:"
              line1="57 רשויות"
              line2="1,620,008 תושבים"
            />
          </div>
        </div>

        {/* מחוז צפון */}
        <div className="district-wrapper" style={{ top: '3%', left: '48%', width: '38%' }}>
          <img 
            src={`${process.env.PUBLIC_URL}/assets/zafon-map.png`} 
            alt="zafon-map" 
            className="maps-button" 
          />
          <div className="bubble-container" style={{ top: '-25%', left: '-180%' }}>
            <DistrictBubble
              image={`${process.env.PUBLIC_URL}/assets/zafon-logo.png`}
              title="מחוז צפון:"
              line1="67 רשויות"
              line2="981,113 תושבים"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default PakarDistricts;
