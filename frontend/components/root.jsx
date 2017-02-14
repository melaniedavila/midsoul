import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import SignUpForm from './signup/signup_form';
import LogInForm from './login/login_form';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
      <Route
        path='/signup'
        component={ SignUpForm }/>
      <Route
        path='/login'
        component={ LogInForm }/>
    </Route>
    </Router>
  </Provider>
);
