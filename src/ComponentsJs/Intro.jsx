import React, { useState, useEffect } from 'react';
import '../ComponentsCss/Intro.css';
import { useNavigate } from 'react-router-dom';

function Intro() {
  const navigate = useNavigate(); // ✅ סוגריים חובה

  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [showSkipButton, setShowSkipButton] = useState(false);
  const [videoSrc, setVideoSrc] = useState(''); // State for the video source

  useEffect(() => {
    // Set the video source based on screen width
    const handleResize = () => {
      if (window.innerWidth >= 769) {
        setVideoSrc(`${process.env.PUBLIC_URL}/assets/videos/introVidComp.mp4`);
      } else {
        setVideoSrc(`${process.env.PUBLIC_URL}/assets/videos/introVid.mp4`);
      }
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const videoEndTimeout = setTimeout(() => {
      setIsVideoEnded(true);
    }, 13000); // Duration until the video is considered ended

    const introTextTimeout = setTimeout(() => {
      setShowIntro(true);
    }, 13050); // Show intro text shortly after video ends

    const skipButtonTimeout = setTimeout(() => {
      setShowSkipButton(true);
    }, 3500); // Show the skip button after 3.5 seconds

    return () => {
      clearTimeout(videoEndTimeout);
      clearTimeout(introTextTimeout);
      clearTimeout(skipButtonTimeout);
    };
  }, []);

  const skipVideo = () => {
    setIsVideoEnded(true);
    setShowIntro(true);
  };

  const goToNextPage = () => {
    navigate('/PakarVocation');
  };

  return (
    <div className="Intro">
      {!isVideoEnded && (
        <>
          {showSkipButton && (
            <button className="skip" onClick={skipVideo}>
              &lt;&lt; דלג/י
            </button>
          )}
          {videoSrc && (
            <video className="video-intro" autoPlay muted playsInline>
              <source src={videoSrc} type="video/mp4" />
              הדפדפן שלך לא תומך בוידאו.
            </video>
          )}
        </>
      )}

      {showIntro && (
        <>
        <div id='content'>
          <img src={`${process.env.PUBLIC_URL}/assets/soldier_desktop.png`} alt="Soldier" className="soldier-image"/>
          <div className="triangular"></div>
          <div className="speech-bubble">
            <h1 className="header-home-page">ברוכים הבאים ללומדת מבוא לפקע"ר</h1>
            <h1 className="header-home-page">בואו להכיר את היחידה!</h1>
            <div id="start-button" onClick={goToNextPage}> שנתחיל? </div>
          </div>
        </div>
        </>
      )}
    </div>
  );
}

export default Intro;
