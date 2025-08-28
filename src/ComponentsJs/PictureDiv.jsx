import React from 'react';
import '../ComponentsCss/PictureDiv.css';

function PictureDiv({ imageSrc, text }) {
  return (
    <div className="PictureDiv">
      {imageSrc && <img src={imageSrc} alt="div-pic" className="picture-img" />}
      {text && <div className="picture-text">{text}</div>}
    </div>
  );
}

export default PictureDiv;
