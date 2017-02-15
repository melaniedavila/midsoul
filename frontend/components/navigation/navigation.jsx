import React from 'react';
import { Link } from 'react-router';

const Navigation = function (props) {
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
        <li><Link to='/signup'>Sign Up</Link></li>
        <li><Link to='/login'>Log In</Link></li>
      </ul>
    );
  }
};

export default Navigation;
