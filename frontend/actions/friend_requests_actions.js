export const RECEIVE_CURRENT_USER_RECEIVED_FRIEND_REQUESTS  = 'RECEIVE_CURRENT_USER_RECEIVED_FRIEND_REQUESTS';
export const RECEIVE_SINGLE_FRIEND_REQUEST = 'RECEIVE_SINGLE_FRIEND_REQUEST';
export const RECEIVE_NEW_FRIEND_REQUEST    = 'RECEIVE_NEW_FRIEND_REQUEST';
export const LOAD_CURRENT_USER_RECEIVED_FRIEND_REQUESTS = 'LOAD_CURRENT_USER_RECEIVED_FRIEND_REQUESTS ';
export const LOAD_SINGLE_CURRENT_USER_RECEIVED_FRIEND_REQUEST = 'LOAD_SINGLE_CURRENT_USER_RECEIVED_FRIEND_REQUEST';
export const RECEIVE_FRIEND_REQUEST_ERRORS = 'RECEIVE_FRIEND_REQUEST_ERRORS';
export const REMOVE_UPDATED_FRIEND_REQUEST = 'REMOVE_UPDATED_FRIEND_REQUEST';
export const UPDATE_FRIEND_SEARCH_WITH_CREATED_FRIEND_REQUEST = 'UPDATE_FRIEND_SEARCH_WITH_CREATED_FRIEND_REQUEST';
import * as APIUtil from '../util/friend_requests_api_util';

export const loadCurrentUserReceivedFriendRequests = () => ({
  type: LOAD_CURRENT_USER_RECEIVED_FRIEND_REQUESTS
});

export const loadSingleUserReceivedFriendRequest = () => ({
  type: LOAD_SINGLE_CURRENT_USER_RECEIVED_FRIEND_REQUEST
});

// pending requests only
export const receiveCurrentUserReceivedFriendRequests = function (friendRequests) {
  return({
    type: RECEIVE_CURRENT_USER_RECEIVED_FRIEND_REQUESTS,
    friendRequests
  });
};

export const receiveSingleFriendRequest = function (friendRequest) {
  return({
    type: RECEIVE_SINGLE_FRIEND_REQUEST,
    friendRequest
  });
};

export const receiveNewFriendRequest = (friendRequest) => ({
  type: RECEIVE_NEW_FRIEND_REQUEST,
  friendRequest
});

export const receiveFriendRequestErrors = (errors) => ({
  type: RECEIVE_FRIEND_REQUEST_ERRORS,
  errors
});

export const requestCurrentUserReceivedFriendRequests = () => (dispatch) => {
	dispatch(loadCurrentUserReceivedFriendRequests());
	return APIUtil.fetchCurrentUserReceivedFriendRequests()
		.then(friendRequests => dispatch(receiveCurrentUserReceivedFriendRequests(friendRequests)));
};

export const removeUpdatedFriendRequest = (friendRequest) => ({
  type: REMOVE_UPDATED_FRIEND_REQUEST,
  friendRequest
});

export const updateFriendSearchWithCreatedFriendRequest = (friendRequest) => ({
  type: UPDATE_FRIEND_SEARCH_WITH_CREATED_FRIEND_REQUEST,
  friendRequest
});

export const createFriendRequest = (friendRequest) => (dispatch) => (
	APIUtil.createFriendRequest(friendRequest).then(friendRequest => {
    dispatch(receiveSingleFriendRequest(friendRequest));
		dispatch(updateFriendSearchWithCreatedFriendRequest(friendRequest));
		return friendRequest;
  }).fail(error => dispatch(receiveFriendRequestErrors(error.responseJSON)))
);

export const updateFriendRequest = (friendRequest) => (dispatch) => (
	APIUtil.updateFriendRequest(friendRequest).then(friendRequest => {
		dispatch(removeUpdatedFriendRequest(friendRequest));
		return friendRequest;
	}).fail(error => dispatch(receiveFriendRequestErrors(error.responseJSON)))
);
