import React from 'react';
import FriendRequestIndexItem from './friend_request_index_item';
import LoadingIcon from '../../loading/loading_icon';

export default class FriendRequestIndex extends React.Component {
  componentDidMount() {
    this.props.requestCurrentUserReceivedFriendRequests();
  }

  render() {
    const { friendRequests, loading, updateFriendRequest } = this.props;

    if (loading) {
      return <LoadingIcon />;
    } else {
      return (
        <ul className="friend-requests-index">
          {friendRequests.map(friendRequest => <FriendRequestIndexItem
                                                key={friendRequest.id}
                                                updateFriendRequest={this.props.updateFriendRequest.bind(this)}
                                                friendRequest={friendRequest} />)}
        </ul>);
    }
  }
}
