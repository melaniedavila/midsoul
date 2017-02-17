import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import { signup, login, logout } from './util/session_api_util';
// import { signup, login, logout } from './actions/session_actions';
// import { fetchAllRoutes, fetchSingleRoute, createRoute, updateRoute, deleteRoute } from './util/routes_api_util';
// import { requestAllRoutes, requestSingleRoute, createRoute, updateRoute, deleteRoute } from './actions/route_actions';
// import { receiveAllRoutes, receiveSingleRoute, receiveNewRoute, removeRoute, receiveRouteErrors } from './actions/routes_actions';


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
      const preloadedState = { session: { currentUser: window.currentUser } };
      store = configureStore(preloadedState);
    } else {
      store = configureStore();
    }
    window.store = store;
    ReactDOM.render(<Root store={store}/>, root);
});

// window.signup = signup;
// window.login = login;
// window.logout = logout;
// window.fetchAllRoutes = fetchAllRoutes;
// window.fetchSingleRoute = fetchSingleRoute;
// window.createRoute = createRoute;
// window.updateRoute = updateRoute;
// window.deleteRoute = deleteRoute;
// window.receiveAllRoutes = receiveAllRoutes;
// window.receiveSingleRoute = receiveSingleRoute;
// window.receiveNewRoute = receiveNewRoute;
// window.removeRoute = removeRoute;
// window.receiveRouteErrors = receiveRouteErrors;
