import { RECEIVE_ROUTE_ERRORS } from '../actions/routes_actions';
import { RECEIVE_RUN_ERRORS } from '../actions/runs_actions';

export default function errorsReducer(state = [], action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ROUTE_ERRORS:
      return [...action.errors];
    case RECEIVE_RUN_ERRORS:
      return [...action.errors];
    default:
      return state;
  }
}
