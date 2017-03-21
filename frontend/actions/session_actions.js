import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export function receiveCurrentUser(currentUser) {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
}

export function receiveErrors(errors) {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
}

export function login(user) {
  return function (dispatch) {
    return APIUtil.login(user).then(function (user) {
      return dispatch(receiveCurrentUser(user));
    }, function (errors) {
      return dispatch(receiveErrors(errors.responseJSON));
    });
  };
}

export function logout() {
  return function (dispatch) {
    return APIUtil.logout().then(function () {
      return dispatch(receiveCurrentUser(null));
    });
  };
}

export function signUp(user) {
  return function (dispatch) {
    return APIUtil.signUp(user).then(function (user) {
      return dispatch(receiveCurrentUser(user));
    }, function (error) {
      return dispatch(receiveErrors(error.responseJSON));
    });
  };
}
