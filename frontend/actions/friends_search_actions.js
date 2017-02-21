import { requestAllUsers } from './users_actions'
export const UPDATE_FRIEND_SEARCH_FILTER = "UPDATE_FRIEND_SEARCH_FILTER";

export const updateFriendSearchFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFriendSearchFilter(filter, value));
  return requestAllUsers(getState().filters)(dispatch);
};

export const changeFriendSearchFilter = (filter, value) => ({
  type: UPDATE_FRIEND_SEARCH_FILTER,
  filter,
  value
});
