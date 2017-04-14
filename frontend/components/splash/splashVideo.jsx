import React from 'react';

export default class SplashVideo extends React.Component {
  render(){
    return(
      <div className="homepage-hero-module">
        <div className="video-container">
          <video autoPlay loop className="fillWidth">
            <source src={ window.midSoulAssets.splashPageMP4 }
                    type="video/mp4" />
            <source src={ window.midSoulAssets.splashPageWEBM }
                    type="video/webm" />
            <img  src={ window.midSoulAssets.splashPageImage }
                  alt='Running shoes'></img>
          </video>
        </div>
      </div>
    );
  }
}
