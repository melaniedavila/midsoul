import { connect } from 'react-redux';
import UserShow from './user_show';
import { requestSingleUser } from '../../../actions/users_actions';
import { createFriendRequest } from '../../../actions/friend_requests_actions';

const mapStateToProps = (state, ownProps) => {
  // NOTE: state has no users atm
  // debugger
  return(
    {currentUser: state.session.currentUser,
    user: state.users[ownProps.params.userId],
    loading: state.loading.singleItemLoading}
  );
};

const mapDispatchToProps = dispatch => ({
  requestSingleUser: id => dispatch(requestSingleUser(id)),
  createFriendRequest: (friendRequest) => dispatch(createFriendRequest(friendRequest))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
