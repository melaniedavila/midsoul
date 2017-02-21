import { UPDATE_FRIEND_SEARCH_FILTER } from '../actions/friends_search_actions';
import { merge } from 'lodash';

const _defaultFriendSearchFilter = Object.freeze({
  searchString: '',
});

export default function friendsSearchReducer(state = _defaultFriendSearchFilter, action) {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_FRIEND_SEARCH_FILTER:
      const newFriendSearchFilter = { [action.filter]: action.value };
      return merge({}, state, newFriendSearchFilter);
    default:
      return state;
  }
}
