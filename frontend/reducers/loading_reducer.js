import {
  RECEIVE_ALL_ROUTES,
  RECEIVE_SINGLE_ROUTE,
  RECEIVE_NEW_ROUTE,
  RECEIVE_ROUTE_ERRORS,
  LOAD_ALL_ROUTES,
  LOAD_SINGLE_ROUTE } from '../actions/routes_actions';

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
        return initialState;
      case LOAD_ALL_ROUTES:
        return Object.assign({}, state, { indexLoading: true });
      case LOAD_SINGLE_ROUTE:
        return Object.assign({}, state, { singleItemLoading: true });
      default:
        return state;
    }
  }
