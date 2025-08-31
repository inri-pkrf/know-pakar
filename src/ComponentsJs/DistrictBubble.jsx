import React from 'react';
import '../ComponentsCss/DistrictBubble.css';


export default function DistrictBubble({ image, title, line1, line2 }) {
  return (
    <div id='DistrictBubble'>
      <div className="rectangle">
        {/* צד שמאל - תמונה */}
        <img src={image} alt={`${title}-logo`} className='map-logos' />

        {/* צד ימין - טקסט */}
        <div className="text-container">
          <h3 id='title-DistrictBubble'>{title}</h3>
          <h6 className='text-DistrictBubble'>{line1}</h6>
          <h6 className='text-DistrictBubble'>{line2}</h6>
        </div>
      </div>

      <div className="polygon"></div>
    </div>
  );
}
