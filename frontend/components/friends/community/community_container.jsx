import React from 'react';
import { connect } from 'react-redux';
import Community from './community';
import { requestCurrentUserFriends } from '../../../actions/friendships_actions';
import { requestCurrentUserReceivedFriendRequests } from '../../../actions/friend_requests_actions';


const mapDispatchToProps = function (dispatch) {
  return {
    requestCurrentUserFriends: () => dispatch(requestCurrentUserFriends()),
    requestCurrentUserReceivedFriendRequests: () => dispatch(requestCurrentUserReceivedFriendRequests())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Community);
