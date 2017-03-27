import { connect } from 'react-redux';
import FriendRequestIndex from './friend_request_index';
import {  requestCurrentUserReceivedFriendRequests,
          updateFriendRequest } from '../../../actions/friend_requests_actions';
import { selectAllFriendRequests } from '../../../reducers/selectors';

const mapStateToProps = (state) => {
  return ({
      friendRequests: selectAllFriendRequests(state),
      loading: state.loading.indexLoading
    });
};

const mapDispatchToProps = dispatch => ({
  requestCurrentUserReceivedFriendRequests: () => dispatch(requestCurrentUserReceivedFriendRequests()),
  updateFriendRequest: (friendRequest) => dispatch(updateFriendRequest(friendRequest))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendRequestIndex);
