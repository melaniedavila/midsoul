import { requestAllUsers } from './users_actions';
export const UPDATE_FRIEND_SEARCH_FILTER = "UPDATE_FRIEND_SEARCH_FILTER";
export const RECEIVE_FRIEND_SEARCH_RESULTS = 'RECEIVE_FRIEND_SEARCH_RESULTS';

export const updateFriendSearchFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFriendSearchFilter(filter, value));
  const searchString = getState().friendsSearch.searchString;
  return requestAllUsers({ searchString })(dispatch);
};

export const changeFriendSearchFilter = (filter, value) => ({
  type: UPDATE_FRIEND_SEARCH_FILTER,
  filter,
  value
});

export const receiveFriendSearchResults = (friendSearchResults) => ({
  type: RECEIVE_FRIEND_SEARCH_RESULTS,
  friendSearchResults
});
