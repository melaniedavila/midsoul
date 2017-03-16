import { connect } from 'react-redux';
import { createFriendRequest } from '../../../actions/friend_requests_actions';
import { selectFriendSearchResults } from '../../../reducers/selectors';
import { selectAllFriends } from '../../../reducers/selectors';
import { updateFriendSearchFilter } from '../../../actions/friends_search_actions';
import FriendSearch from './friend_search';

const mapStateToProps = (state) => {
  return {
    foundUsers: selectFriendSearchResults(state),
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
