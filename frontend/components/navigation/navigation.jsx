import React from 'react';
import { Link, hashHistory } from 'react-router';

const Navigation = function (props) {
  function redirectTo(url) {
    return function (e) {
      e.preventDefault();
      hashHistory.push(url);
    };
  }

  if (props.currentUser) {
    const img_url = props.currentUser.image_url || window.midSoulAssets.defaultProfPic;
    return(
      <header>
        <nav className='main-nav'>
          <nav className='left-nav'>
            <Link to='/'><img src={window.midSoulAssets.localLogo}/></Link>
          </nav>
          <nav className='right-nav'>
            <div className='nav-user-img'>
              { /* toggle below after adding prof pics via paperclip*/}
              {/* <img src={`${img_url}`}/> */}
              <p>{`Welcome, ${props.currentUser.f_name}`}</p>
            </div>
            { /* add below as drop down upon hover on image */}
            <div className='nav-log-out'>
              <button
                className='button-log-out'
                onClick={props.logout}>
                LOG OUT
              </button>
            </div>
          </nav>
        </nav>
      </header>
    );
  }
  else {
    return(
      <nav className='main-nav'>
        <nav className='left-nav'>
          <Link to='/'><img src={window.midSoulAssets.localLogo}/></Link>
        </nav>
        <nav className='right-nav'>
          <ul>
            <li>
              <button
                className='button-log-in'
                onClick={redirectTo('/login')}>
                LOG IN</button>
            </li>
            <li>
              <button
                className='button-sign-up'
                onClick={redirectTo('/signup')}>
                SIGN UP</button>
            </li>
          </ul>
        </nav>
      </nav>
    );
  }
};

export default Navigation;
