import { RECEIVE_ROUTE_ERRORS } from '../actions/routes_actions';

export default function errorsReducer(state = [], action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ROUTE_ERRORS:
      return [...action.errors];
    default:
      return state;
  }
}
