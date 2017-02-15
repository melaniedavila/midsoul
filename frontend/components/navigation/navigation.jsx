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
      <div>
        <p>remove h2 below</p>
        <h2>{`Welcome, ${props.currentUser.f_name} ${props.currentUser.l_name}`}</h2>
        <img src={`${props.currentUser.image_url}`}/>
        <br />
        <button onClick={props.logout}>Log Out</button>
      </div>
    );
  }
  else {
    return(
      <ul>
        <li>
          <button onClick={redirectTo('/login')}>LOG IN</button>
        </li>
        <li>
          <button onClick={redirectTo('/signup')}> SIGN UP</button>
        </li>
      </ul>
    );
  }
};

export default Navigation;
