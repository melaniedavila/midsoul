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
    return(
      <header>
        <nav className='main-nav'>
          <nav className='left-nav'>
            <img src={'../../../assets/images/logo/midsoul-logo.jpg'}/>
          </nav>
          <nav className='right-nav'>
            <div className='nav-user-img'>
              <img src={`${props.currentUser.image_url}`}/>
            </div>
            { /* add below as drop down upon hover on image */}
            <div className='nav-log-out'>
              <button
                className='button-log-out'
                onClick={props.logout}>LOG OUT</button>
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
          <img src={'../../../assets/images/logo/midsoul-logo.jpg'}/>
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
