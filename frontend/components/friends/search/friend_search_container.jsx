import { connect } from 'react-redux';
import { updateFriendSearchFilter } from '../../../actions/friends_search_actions';
import { createFriendRequest } from '../../../actions/friend_requests_actions';
import { selectAllUsers } from '../../../reducers/selectors';
import { selectAllFriends } from '../../../reducers/selectors';

import FriendSearch from './friend_search';

const mapStateToProps = (state) => {
  debugger
  return {
    foundUsers: selectAllUsers(state),
    currentUser: state.session.currentUser,
    searchString: state.friendsSearch.searchString
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateFriendSearchFilter: (filter, value) => dispatch(updateFriendSearchFilter(filter, value)),
  createFriendRequest: (friendRequest) => dispatch(createFriendRequest(friendRequest))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendSearch);
