import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import { signup, login, logout } from './util/session_api_util';
// import { signup, login, logout } from './actions/session_actions';
// import { fetchAllRoutes, fetchSingleRoute, createRoute, updateRoute, deleteRoute } from './util/routes_api_util';
// import { requestAllRoutes, requestSingleRoute, createRoute, updateRoute, deleteRoute } from './actions/route_actions';
// import { receiveAllRoutes, receiveSingleRoute, receiveNewRoute, removeRoute, receiveRouteErrors } from './actions/routes_actions';

// import { receiveAllRuns, receiveSingleRun, receiveNewRun, removeRun, receiveRunErrors, requestAllRuns } from './actions/runs_actions';
// import { fetchAllRuns, fetchSingleRun, createRun, updateRun, deleteRun } from './util/runs_api_util';
// import { selectAllRoutes, selectAllRuns, selectAllFriendRequests } from './reducers/selectors';

// import { receiveAllUsers, receiveSingleUser, receiveNewUser, removeUser, receiveUserErrors, requestAllUsers } from './actions/users_actions';
// import { fetchAllUsers, fetchSingleUser, createUser, updateUser, deleteUser } from './util/users_api_util';


// import { receiveCurrentUserReceivedFriendRequests, receiveSingleFriendRequest, receiveNewFriendRequest, receiveFriendRequestErrors, requestCurrentUserReceivedFriendRequests } from './actions/friend_requests_actions';
// import { fetchCurrentUserReceivedFriendRequests, createFriendRequest, updateFriendRequest } from './util/friend_requests_api_util';


document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
      const preloadedState = { session: { currentUser: window.currentUser } };
      store = configureStore(preloadedState);
    } else {
      store = configureStore();
    }
    // window.store = store;
    ReactDOM.render(<Root store={store}/>, root);
});


// window.receiveCurrentUserReceivedFriendRequests = receiveCurrentUserReceivedFriendRequests;
// window.receiveSingleFriendRequest = receiveSingleFriendRequest;
// window.receiveNewFriendRequest = receiveNewFriendRequest;
// window.receiveFriendRequestErrors = receiveFriendRequestErrors;
// window.requestCurrentUserReceivedFriendRequests = requestCurrentUserReceivedFriendRequests;
// window.fetchCurrentUserReceivedFriendRequests = fetchCurrentUserReceivedFriendRequests;
// window.createFriendRequest = createFriendRequest;
// window.updateFriendRequest = updateFriendRequest;
// window.selectAllFriendRequests = selectAllFriendRequests;

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

// window.fetchAllRuns = fetchAllRuns;
// window.fetchSingleRun = fetchSingleRun;
// window.createRun = createRun;
// window.updateRun = updateRun;
// window.deleteRun = deleteRun;
// window.receiveAllRuns = receiveAllRuns;
// window.receiveSingleRun = receiveSingleRun;
// window.receiveNewRun = receiveNewRun;
// window.removeRun = removeRun;
// window.receiveRunErrors = receiveRunErrors;
// window.selectAllRoutes = selectAllRoutes;
// window.selectAllRuns = selectAllRuns;
// window.requestAllRuns = requestAllRuns;


// window.fetchAllUsers = fetchAllUsers;
// window.fetchSingleUser = fetchSingleUser;
// window.createUser = createUser;
// window.updateUser = updateUser;
// window.deleteUser = deleteUser;
// window.receiveAllUsers = receiveAllUsers;
// window.receiveSingleUser = receiveSingleUser;
// window.receiveNewUser = receiveNewUser;
// window.removeUser = removeUser;
// window.receiveUserErrors = receiveUserErrors;
// // window.selectAllRoutes = selectAllRoutes;
// // window.selectAllUsers = selectAllUsers;
// window.requestAllUsers = requestAllUsers;
