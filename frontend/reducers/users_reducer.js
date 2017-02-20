import { merge, assign } from 'lodash';
import {  RECEIVE_ALL_USERS, RECEIVE_SINGLE_USER, REMOVE_USER,
          RECEIVE_NEW_USER, RECEIVE_USER_ERRORS } from '../actions/users_actions';

export default function usersReducer(state = {}, action) {
  Object.freeze(state);
  // debugger
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return merge({}, action.users);
    case RECEIVE_SINGLE_USER:
    case RECEIVE_NEW_USER:
      return merge({}, state, { [action.user.id]: action.user });
    case REMOVE_USER:
      let newState = merge({}, state);
      delete newState[action.user.id];
      return newState;
    default:
      return state;
  }
}
