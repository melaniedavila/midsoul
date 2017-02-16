import React from 'react'

const SplashVideo = function () {
  return(
    <div className="homepage-hero-module">
      <div className="video-container">
        <div className="filter"></div>
        <video autoPlay loop className="fillWidth">
          <source src={ window.midSoulAssets.splashPageMP4 } type="video/mp4" />
          <source src={ window.midSoulAssets.splashPageWEBM } type="video/webm" />
        </video>
      </div>
    </div>
  );
};

export default SplashVideo;
