import { merge } from 'lodash';
import {  RECEIVE_CURRENT_USER_RECEIVED_FRIEND_REQUESTS,
          RECEIVE_SINGLE_FRIEND_REQUEST,
          RECEIVE_NEW_FRIEND_REQUEST } from '../actions/friend_requests_actions';

export default function friendRequestsReducer(state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER_RECEIVED_FRIEND_REQUESTS:
      return merge({}, action.friendRequests);
    case RECEIVE_SINGLE_FRIEND_REQUEST:
    case RECEIVE_NEW_FRIEND_REQUEST:
      return merge({}, state, { [action.friendRequest.id]: action.friendRequest } );
    default:
      return state;
  }
}
