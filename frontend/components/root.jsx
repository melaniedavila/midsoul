import React from 'react';
import configureStore from '../store/store';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import App from './app';
import AllActivityFeedContainer from './feed/all_activity_feed_container';
import HomeContainer from './home/home_container';
import LogInFormContainer from './login/login_form_container';
import SignUpFormContainer from './signup/signup_form_container';
import RouteIndexContainer from './routes/index/route_index_container';
import RouteShowContainer from './routes/show/route_show_container';
import NewRouteContainer from './routes/form/new_route_container';
import RunIndexContainer from './runs/index/run_index_container';
import RunShowContainer from './runs/show/run_show_container';
import NewRunContainer from './runs/form/new_run_container';
import UserEditContainer from './users/form/user_edit_container';
import UserShowContainer from './users/show/user_show_container';

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

  function requireCurrentUser(nextState, replace) {
    requireLogIn();

    const currentUserId = store.getState().session.currentUser.id;
    const requestedUserId = parseInt(nextState.params.userId);

    if (currentUserId !== requestedUserId) {
      replace(`users/${currentUserId}/edit`);
    }
  }

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ HomeContainer } onEnter={redirectIfLoggedIn}/>
          <Route
            path='/feed'
            component={ AllActivityFeedContainer }
            onEnter={ requireLogIn }/>
          <Route
            path='/signup'
            component={ SignUpFormContainer }
            onEnter={ redirectIfLoggedIn }/>
          <Route
            path='/login'
            component={ LogInFormContainer }
            onEnter={redirectIfLoggedIn}/>
          <Route
            path="/routes"
            component={ RouteIndexContainer }
            onEnter={ requireLogIn }/>
          <Route
            path='/routes/create-route'
            component={ NewRouteContainer }
            onEnter={ requireLogIn }/>
          <Route
            path="/routes/:routeId"
            component={ RouteShowContainer }
            onEnter={ requireLogIn }/>
          <Route
            path="/my-runs"
            component={ RunIndexContainer }
            onEnter={ requireLogIn }/>
          <Route
            path='/log-run'
            component={ NewRunContainer }
            onEnter={ requireLogIn }/>
          <Route
            path="/runs/:runId"
            component={ RunShowContainer }
            onEnter={ requireLogIn }/>
          <Route
            path="/users/:userId"
            component={ UserShowContainer }
            onEnter={ requireLogIn }/>
          <Route
            path="/users/:userId/edit"
            component={ UserEditContainer }
            onEnter={ requireCurrentUser }/>
        </Route>
      </Router>
    </Provider>
  );
}
