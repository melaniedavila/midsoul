export const RECEIVE_CURRENT_USER_FRIENDS = 'RECEIVE_CURRENT_USER_FRIENDS';
export const REMOVE_FRIENDSHIP = 'REMOVE_FRIENDSHIP';
export const LOAD_CURRENT_USER_FRIENDS = 'LOAD_CURRENT_USER_FRIENDS ';
export const LOAD_SINGLE_FRIENDSHIP = 'LOAD_SINGLE_FRIENDSHIP';
export const RECEIVE_FRIENDSHIP_ERRORS = 'RECEIVE_FRIENDSHIP_ERRORS';

import * as APIUtil from '../util/friendships_api_util';

export const loadCurrentUserFriends = () => ({
  type: LOAD_CURRENT_USER_FRIENDS
});

export const loadSingleFriendship = () => ({
  type: LOAD_SINGLE_FRIENDSHIP
});

export const receiveCurrentUserFriends = function (friends) {
  return({
    type: RECEIVE_CURRENT_USER_FRIENDS,
    friends
  });
};

export const removeFriendship = function (friendship) {
  return {
    type: REMOVE_FRIENDSHIP,
    friendship
  };
};

export const receiveFriendshipErrors = (errors) => ({
  type: RECEIVE_FRIENDSHIP_ERRORS,
  errors
});

export const requestCurrentUserFriends = () => (dispatch) => {
	dispatch(loadCurrentUserFriends());
	return APIUtil.fetchCurrentUserFriends()
		.then(friends => dispatch(receiveCurrentUserFriends(friends)));
};

export const deleteFriendship = (id) => (dispatch) => (
	APIUtil.deleteFriendship(id).then(friendship => {
		dispatch(removeFriendship(friendship));
		return friendship;
	}).fail(error => dispatch(receiveFriendshipErrors(error.responseJSON)))
);
