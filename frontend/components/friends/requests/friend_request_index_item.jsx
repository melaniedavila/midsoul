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
      {/*<img src={friendRequest.requestor.profile_picture} alt='Profile picture'></img>*/}
      <p>{friendRequest.requestor.f_name} {friendRequest.requestor.l_name}</p>
      <button onClick={acceptFriendRequest}>ACCEPT</button>
      <button onClick={rejectFriendRequest}>DENY</button>
    </div>
  </li>
)};

export default FriendRequestIndexItem;
