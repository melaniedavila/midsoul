import { merge } from 'lodash';
import {  RECEIVE_ALL_ROUTES, RECEIVE_SINGLE_ROUTE, REMOVE_ROUTE,
          RECEIVE_NEW_ROUTE } from '../actions/routes_actions';

export default function routesReducer(state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_ROUTES:
      return merge({}, action.routes);
    case RECEIVE_SINGLE_ROUTE:
    case RECEIVE_NEW_ROUTE:
      return merge({}, state, { [action.route.id]: action.route });
    case REMOVE_ROUTE:
      debugger
      let newState = merge({}, state);
      delete newState[action.route.id];
      debugger
      return newState;
    default:
      return state;
  }
}
