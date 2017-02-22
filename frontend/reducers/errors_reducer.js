import { RECEIVE_ROUTE_ERRORS } from '../actions/routes_actions';
import { RECEIVE_RUN_ERRORS } from '../actions/runs_actions';
import { RECEIVE_FRIEND_REQUEST_ERRORS } from '../actions/friend_requests_actions';
import { RECEIVE_FRIENDSHIP_ERRORS } from '../actions/friendships_actions';
import { RECEIVE_FEED_ERRORS } from '../actions/feeds_actions';


export default function errorsReducer(state = [], action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ROUTE_ERRORS:
    case RECEIVE_RUN_ERRORS:
    case RECEIVE_FRIEND_REQUEST_ERRORS:
    case RECEIVE_FRIENDSHIP_ERRORS:
    case RECEIVE_FEED_ERRORS:
      return [...action.errors];
    default:
      return state;
  }
}
