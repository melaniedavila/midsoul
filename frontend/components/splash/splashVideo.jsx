import React from 'react';

export default class SplashVideo extends React.Component {

  // componentDidMount(){
  //
  //   scaleVideoContainer();
  //   // scaleBannerVideoSize('.video-container .poster img');
  //   // scaleBannerVideoSize('.video-container .filter');
  //   // scaleBannerVideoSize('.video-container video');
  //   console.log('init width', $(window).width());
  //   console.log('init height', $(window).height());
  //
  //   initBannerVideoSize('.video-container .poster img');
  //   initBannerVideoSize('.video-container .filter');
  //   initBannerVideoSize('.video-container video');
  //
  //   $(window).on('resize', function() {
  //     console.log('resize width', $(window).width());
  //     console.log('resize height', $(window).height());
  //     scaleVideoContainer();
  //     scaleBannerVideoSize('.video-container .poster img');
  //     scaleBannerVideoSize('.video-container .filter');
  //     scaleBannerVideoSize('.video-container video');
  //   });
  //
  //   function scaleVideoContainer() {
  //     var height = $(window).height() + 5;
  //     var unitHeight = parseInt(height) + 'px';
  //     $('.homepage-hero-module').css('height',unitHeight);
  //   }
  //
  //   function initBannerVideoSize(element){
  //     $(element).each(function(){
  //       debugger
  //       $(this).data('height', $(window).height());
  //       $(this).data('width', $(window).width());
  //     });
  //     scaleBannerVideoSize(element);
  //   }
  //
  //   function scaleBannerVideoSize(element){
  //     var windowWidth = $(window).width(),
  //     windowHeight = $(window).height() + 5,
  //     videoWidth,
  //     videoHeight;
  //
  //     // console.log(windowHeight);
  //     $(element).each(function(){
  //       var videoAspectRatio = $(this).data('height')/$(this).data('width');
  //
  //       $(this).width(windowWidth);
  //
  //       if(windowWidth < 1000){
  //         videoHeight = windowHeight;
  //         videoWidth = videoHeight / videoAspectRatio;
  //         $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});
  //
  //         $(this).width(videoWidth).height(videoHeight);
  //       }
  //
  //       $('.homepage-hero-module .video-container video').addClass('fadeIn animated');
  //     });
  //   }
  // }

  // componentDidMount() {
  //   this.video.addEventListener('canplay', () => {
  //     debugger
  //     this.video.play();
  //   });
  // }


  render(){
    return(
      <div className="homepage-hero-module">
        <div className="video-container">
          // creates a weird overlay that prevents us from clicking on anything
          {/*<div className="filter"></div>*/}
          <video autoPlay loop className="fillWidth">
            <source src={ window.midSoulAssets.splashPageMP4 } type="video/mp4" />
            <source src={ window.midSoulAssets.splashPageWEBM } type="video/webm" />
          </video>
        </div>
      </div>
    );
  }
}
