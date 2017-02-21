import React from 'react';
import { Link } from 'react-router';

const FriendIndexItem = ({ friend }) => {

  return (
  <li className="friend-index-item">
    <Link to={`/users/${friend.id}`}>
      {/*<img src={friend.profile_picture} alt='Profile picture'></img>*/}
    </Link>
      <p>{friend.f_name} {friend.l_name}</p>
  </li>
)};

export default FriendIndexItem;
