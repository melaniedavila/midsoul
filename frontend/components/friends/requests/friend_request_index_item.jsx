import React from 'react';
import { Link } from 'react-router';

const FriendRequestIndexItem = ({ friendRequest, updateFriendRequest }) => {

  const acceptFriendRequest = function (e) {
    e.preventDefault();
    updateFriendRequest({
      id: friendRequest.id,
      status: 'accepted'
    })
  }

  const rejectFriendRequest = function (e) {
    e.preventDefault();
    updateFriendRequest({
      id: friendRequest.id,
      status: 'rejected'
    })
  }

  return (
  <li className="friend-request-index-item">
    <div className='friend-request-flex-container'>
      <div className='friend-request-user-img-and-name'>
        <div className='friend-request-img'>
          <Link to={`/users/${friendRequest.requestor.id}`}>
            <img src={friendRequest.requestor.profile_picture} alt='Profile picture'></img>
          </Link>
        </div>
        <Link to={`/users/${friendRequest.requestor.id}`}>
          <p>{friendRequest.requestor.f_name} {friendRequest.requestor.l_name}</p>
        </Link>
      </div>
      <div className='friend-request-buttons'>
        <button onClick={acceptFriendRequest}>ACCEPT</button>
        <button onClick={rejectFriendRequest}>DENY</button>
      </div>
    </div>
  </li>
)};

export default FriendRequestIndexItem;
