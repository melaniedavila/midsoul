import React from 'react';
import configureStore from '../store/store';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import App from './app';
import FeedContainer from './feed/feed_container';
import HomeContainer from './home/home_container';
import LogInFormContainer from './login/login_form_container';
import SignUpFormContainer from './signup/signup_form_container';

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
      replace('/feed');
    }
  }

  function requireLogIn(nextState, replace) {
    if (!isLoggedIn()) {
      replace('/login');
    }
  }

  {/* change index route below to Feed and add requireLogIn hook*/}
  // <IndexRoute component={ FeedContainer } onEnter={requireLogIn}/>
  // <IndexRedirect to='/feed'/>
  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ HomeContainer } onEnter={redirectIfLoggedIn}/>
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
