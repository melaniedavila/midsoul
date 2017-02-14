import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import SignUpForm from './signup/signup_form';
import LogInForm from './login/login_form';

export default function Root() {
  const preloadedState = window.currentUser ?
    { session: { currentUser: window.currentUser, errors: {}}} : {};

  delete window.currentUser;
  const store = configureStore(preloadedState);

  function isLoggedIn() {
    return !!store.getState().session.currentUser;
  }

  function redirectIfLoggedIn(nextState, replace) {
    if (isLoggedIn()) {
      replace('/');
    }
  }

  function requireLogIn(nextState, replace) {
    if (!isLoggedIn()) {
      replace('/');
    }
  }

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <Route
            path='/signup'
            component={ SignUpForm }
            onEnter={ redirectIfLoggedIn }/>
          <Route
            path='/login'
            component={ LogInForm }
            onEnter={redirectIfLoggedIn}/>
        </Route>
      </Router>
    </Provider>
  );
}
