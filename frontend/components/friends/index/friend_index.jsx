import React from 'react';
import FriendIndexItem from './friend_index_item';
import LoadingIcon from '../../loading/loading_icon';

export default class FriendIndex extends React.Component {
  componentDidMount() {
    this.props.requestCurrentUserFriends();
  }

  render() {
    const { friends, loading } = this.props;
    if (loading) {
      return <LoadingIcon />;
    } else {
      return (
      <section className="friends-index">
        <ul className='mini-friend-details'>
          {friends.map(friend => <FriendIndexItem
                                    key={friend.id}
                                    friend={friend} />)}
        </ul>
      </section> );
    }
  }
}
