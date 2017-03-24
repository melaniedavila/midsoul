import { connect } from 'react-redux';
import { createFriendRequest } from '../../../actions/friend_requests_actions';
import { requestSingleUser } from '../../../actions/users_actions';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => {
  return({
    currentUser: state.session.currentUser,
    user: state.users[ownProps.params.userId],
    loading: state.loading.singleItemLoading
  });
};

const mapDispatchToProps = dispatch => ({
  requestSingleUser: id => dispatch(requestSingleUser(id)),
  createFriendRequest: (friendRequest) => dispatch(createFriendRequest(friendRequest))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
