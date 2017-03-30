import {  UPDATE_FRIEND_SEARCH_FILTER,
          RECEIVE_FRIEND_SEARCH_RESULTS } from '../actions/friends_search_actions';
import { UPDATE_FRIEND_SEARCH_WITH_CREATED_FRIEND_REQUEST } from '../actions/friend_requests_actions';
import { merge, assign } from 'lodash';

const _defaultFriendSearchFilter = Object.freeze({
  searchString: '',
});

export default function friendsSearchReducer(state = _defaultFriendSearchFilter, action) {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_FRIEND_SEARCH_FILTER:
      const newFriendSearchFilter = { [action.filter]: action.value };
      return merge({}, state, newFriendSearchFilter);
    case RECEIVE_FRIEND_SEARCH_RESULTS:
      return assign({}, state, { friendSearchResults: action.friendSearchResults});
    case UPDATE_FRIEND_SEARCH_WITH_CREATED_FRIEND_REQUEST:
      return merge(
        {},
        state,
        {
          friendSearchResults: {
            [action.friendRequest.requestee_id]: {
              currentUserFriendRequest: action.friendRequest
            }
          }
        }
      );
    default:
      return state;
  }
}
