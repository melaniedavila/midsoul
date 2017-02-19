// prune as necessary

export const RECEIVE_ALL_USERS    = 'RECEIVE_ALL_USERS';
export const RECEIVE_SINGLE_USER = 'RECEIVE_SINGLE_USER';
export const RECEIVE_NEW_USER    = 'RECEIVE_NEW_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const LOAD_ALL_USERS = 'LOAD_ALL_USERS ';
export const LOAD_SINGLE_USER = 'LOAD_SINGLE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

import * as APIUtil from '../util/users_api_util';

export const loadAllUsers = () => ({
  type: LOAD_ALL_USERS
});

export const loadSingleUser = () => ({
  type: LOAD_SINGLE_USER
});

export const receiveAllUsers = function (users) {
  return({
    type: RECEIVE_ALL_USERS,
    users
  });
};

export const receiveSingleUser = (user) => ({
  type: RECEIVE_SINGLE_USER,
  user
});

export const receiveNewUser = (user) => ({
  type: RECEIVE_NEW_USER,
  user
});

export const removeUser = (user) => ({
  type: REMOVE_USER,
  user
});

export const receiveUserErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors
});


export const requestAllUsers = () => (dispatch) => {
	dispatch(loadAllUsers());
	return APIUtil.fetchAllUsers()
		.then(users => dispatch(receiveAllUsers(users)));
};

export const requestSingleUser = (id) => (dispatch) => {
	dispatch(loadSingleUser());
	return APIUtil.fetchSingleUser(id).then(user => {
		dispatch(receiveSingleUser(user));
    // why return user below????
		return user;
	}).fail(error => dispatch(receiveUserErrors(error.responseJSON)));
};

export const createUser = (user) => (dispatch) => (
	APIUtil.createUser(user).then(user => {
		dispatch(receiveNewUser(user));
		return user;
	}).fail(error => dispatch(receiveUserErrors(error.responseJSON)))
);

export const updateUser = (user) => (dispatch) => (
	APIUtil.updateUser(user).then(user => {
		dispatch(receiveSingleUser(user));
		return user;
	}).fail(error => dispatch(receiveUserErrors(error.responseJSON)))
);

export const deleteUser = (id) => (dispatch) => (
	APIUtil.deleteUser(id).then(user => {
		dispatch(removeUser(user));
		return user;
	}).fail(error => dispatch(receiveUserErrors(error.responseJSON)))
);
