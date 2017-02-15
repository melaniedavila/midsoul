import { merge, assign } from 'lodash';
import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';

const _nullSession = Object.freeze({
  currentUser: null,
  errors: {}
});

export default function sessionReducer(state = _nullSession, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {currentUser: action.currentUser});
    case RECEIVE_ERRORS:
      return assign({}, state, {errors: action.errors});
    default:
      return state;
  }
}
