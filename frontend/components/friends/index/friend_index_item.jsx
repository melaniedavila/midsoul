import React from 'react';
import { Link } from 'react-router';

const FriendIndexItem = ({ friend }) => {

  return (
  <li className="friend-index-item">
    <Link className='friend-photo-link' to={`/users/${friend.id}`}>
      <img src={friend.profile_picture} alt='Profile picture'></img>
    </Link>
    <Link className='friend-name-link' to={`/users/${friend.id}`}>
      <p className='friend-name'>{friend.f_name}&nbsp;{friend.l_name}</p>
    </Link>
  </li>
)};

export default FriendIndexItem;
