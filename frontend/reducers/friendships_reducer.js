import { merge } from 'lodash';
import {  RECEIVE_CURRENT_USER_FRIENDS,
          REMOVE_FRIENDSHIP } from '../actions/friendships_actions';

export default function friendshipsReducer(state = {}, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER_FRIENDS:
      return merge({}, action.friends);
    case REMOVE_FRIENDSHIP:
      let newState = merge({}, state);
      delete newState[action.friendship.id];
      return newState;
    default:
      return state;
  }
}
