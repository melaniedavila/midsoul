import React from 'react';
import { Link, hashHistory } from 'react-router';


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
      <main>
        <h1>MAKE EVERY MILE COUNT</h1>
        <h2>JOIN OUR COMMUNITY OF RUNNERS</h2>
        <h4>You pound the pavement, we provide the motivation
        Plan each stride and learn from every route with midSoul.</h4>
      <p>Not convinced?</p> <button onClick={loginGuest(guest)}>LOG IN AS GUEST</button>
      </main>
    );

};

export default Home;
