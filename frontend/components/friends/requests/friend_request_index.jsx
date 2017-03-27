import React from 'react';
import FriendRequestIndexItem from './friend_request_index_item';
import LoadingIcon from '../../loading/loading_icon';

export default class FriendRequestIndex extends React.Component {
  constructor(props) {
    super(props);
    this.updateFriendRequest = this.props.updateFriendRequest.bind(this);
  }

  componentDidMount() {
    this.props.requestCurrentUserReceivedFriendRequests();
  }

  render() {
    const { friendRequests, loading } = this.props;

    if (loading) {
      return <LoadingIcon />;
    }
    else if (friendRequests.length === 0) {
      return (<div className='empty-friend-requests'>
                <h4>You have no pending friend requests.</h4>
              </div>);
    } else {
      return (
        <ul className="friend-requests-index">
          { friendRequests.map(friendRequest => {
            return (<FriendRequestIndexItem
                      key={friendRequest.id}
                      updateFriendRequest={this.updateFriendRequest}
                      friendRequest={friendRequest} />);
            })
          }
        </ul>);
    }
  }
}
