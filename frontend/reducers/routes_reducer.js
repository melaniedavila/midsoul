import { merge, assign } from 'lodash';
import {  RECEIVE_ALL_ROUTES, RECEIVE_SINGLE_ROUTE, REMOVE_ROUTE,
          RECEIVE_NEW_ROUTE, RECEIVE_ROUTE_ERRORS } from '../actions/routes_actions';

export default function routesReducer(state = {}, action) {
  Object.freeze(state);
  // debugger
  switch (action.type) {
    case RECEIVE_ALL_ROUTES:
      console.log('state in reducer', state);
      console.log('action', action);
      // return merge({}, state, { routes: action.routes });
      return merge({}, action.routes);
    case RECEIVE_SINGLE_ROUTE:
    case RECEIVE_NEW_ROUTE:
      return merge({}, state, { [action.route.id]: action.route });
    case REMOVE_ROUTE:
      let newState = merge({}, state);
      delete newState[action.route.id];
      return newState;
    // case RECEIVE_NEW_ROUTE_COMMENT:
    // case REMOVE_ROUTE_COMMENT:
    default:
      return state;
  }
}
