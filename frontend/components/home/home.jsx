import React from 'react';
import { Link, hashHistory } from 'react-router';
import FeatureFooter from '../footer/feature_footer';
import SplashVideo from '../splash/splashVideo';

const Home = function (props) {
    const guest = { email: 'scott-jurek@example.com',
                            password: 'password' };

    const loginGuest = function (guest) {
      return function (e) {
        e.preventDefault();
        props.login(guest).then(() => (hashHistory.push('/feed')));
      };
    };

    return(
      <main className='splash-page'>
        <div className='splash-text'>
          <h1 className='splash-header'>Make Every Mile Count</h1>
          <br/>
          <h4>
            You pound the pavement, we provide the motivation.
          </h4>
          <h4>
            Plan each stride and learn from every route with midSoul.
          </h4>
          <p className='splash-guest'>Need convincing?</p>
            <button
            className='button-guest-log-in'
            onClick={loginGuest(guest)}>Guest Log In</button>
        </div>
        <div className='splash-video'>
          <SplashVideo />
        </div>
        <div className='feature-footer-component-container'>
          <FeatureFooter />
        </div>
      </main>
    );

};

export default Home;
