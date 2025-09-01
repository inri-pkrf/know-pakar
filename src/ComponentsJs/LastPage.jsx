import React from 'react';
import '../ComponentsCss/LastPage.css';
import { useNavigate } from 'react-router-dom';

function LastPage() {
    const navigate = useNavigate();

    const goTofirstPage = () => {
    navigate('/');
  };

  return (
    <div className="LastPage">
       <div id='content'>
          <img src={`${process.env.PUBLIC_URL}/assets/soldier_desktop.png`} alt="Soldier" className="soldier-image"/>
          <div className="triangular"></div>
          <div className="speech-bubble">
            <h1 className="header-last-page">עכשיו אתם יודעים!</h1>
            <h1 className="header-last-page"> ואם לא...</h1>
            <div id="start-button" onClick={goTofirstPage}>שוב? </div>
          </div>
        </div>
    </div>
  );
}

export default LastPage;
