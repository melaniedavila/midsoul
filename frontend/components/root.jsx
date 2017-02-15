import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import SignUpFormContainer from './signup/signup_form_container';
import LogInFormContainer from './login/login_form_container';
import configureStore from '../store/store';
import App from './app';
import FeedContainer from './feed/feed_container';

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
      replace('/login');
    }
  }

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          {/* change index route below to Feed and add requireLogIn hook*/}
          // <IndexRoute component={ FeedContainer } onEnter={requireLogIn}/>
          <IndexRedirect to='/feed'/>
          <Route
            path='/feed'
            component={ FeedContainer }
            onEnter={ requireLogIn }/>
          <Route
            path='/signup'
            component={ SignUpFormContainer }
            onEnter={ redirectIfLoggedIn }/>
          <Route
            path='/login'
            component={ LogInFormContainer }
            onEnter={redirectIfLoggedIn}/>
        </Route>
      </Router>
    </Provider>
  );
}
