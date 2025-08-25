import React from 'react';
import '../ComponentsCss/Footer.css';


function Footer() {
  return (
    <div className="Footer">
        <img src={`${process.env.PUBLIC_URL}/assets/blue-dicor.png`} alt="blue-dicor" id='blue-dicor' />
    </div>
  );
}

export default Footer;
