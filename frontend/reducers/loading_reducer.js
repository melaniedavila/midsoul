import {
  RECEIVE_ALL_ROUTES,
  RECEIVE_SINGLE_ROUTE,
  RECEIVE_NEW_ROUTE,
  RECEIVE_ROUTE_ERRORS,
  LOAD_ALL_ROUTES,
  LOAD_SINGLE_ROUTE } from '../actions/routes_actions';

import {
  LOAD_MULTI_USER_FEED_ITEMS,
  RECEIVE_MULTI_USER_FEED_ITEMS
} from '../actions/feeds_actions';

import {
  LOAD_SINGLE_USER,
  RECEIVE_SINGLE_USER
} from '../actions/users_actions';


import {
  LOAD_ALL_RUNS,
  RECEIVE_ALL_RUNS
} from '../actions/runs_actions';

const initialState = {
  indexLoading: false,
  singleItemLoading: false
};

export default function loadingReducer(state = initialState, action) {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALL_ROUTES:
    case RECEIVE_SINGLE_ROUTE:
    case RECEIVE_NEW_ROUTE:
    case RECEIVE_ROUTE_ERRORS:
    case RECEIVE_MULTI_USER_FEED_ITEMS:
    case RECEIVE_SINGLE_USER:
    case RECEIVE_ALL_RUNS:
      return initialState;
    case LOAD_ALL_ROUTES:
    case LOAD_MULTI_USER_FEED_ITEMS:
    case LOAD_ALL_RUNS:
      return Object.assign({}, state, { indexLoading: true });
    case LOAD_SINGLE_ROUTE:
    case LOAD_SINGLE_USER:
      return Object.assign({}, state, { singleItemLoading: true });
    default:
      return state;
  }
}
