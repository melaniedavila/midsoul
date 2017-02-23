import { merge, assign } from 'lodash';
import {  RECEIVE_ALL_RUNS, RECEIVE_SINGLE_RUN, REMOVE_RUN,
          RECEIVE_NEW_RUN, RECEIVE_RUN_ERRORS } from '../actions/runs_actions';

export default function commentsReducer(state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SINGLE_RUN_COMMENTS:
      return merge({}, action.runComments);
    case RECEIVE_SINGLE_ROUTE_COMMENTS:
      return merge({}, action.routeComments);

    case RECEIVE_SINGLE_RUN:
    case RECEIVE_NEW_RUN:
      return merge({}, state, { [action.run.id]: action.run });
    case REMOVE_RUN:
      let newState = merge({}, state);
      delete newState[action.run.id];
      return newState;
    default:
      return state;
  }
}
