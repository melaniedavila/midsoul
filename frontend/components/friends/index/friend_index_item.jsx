import React from 'react';
import { Link } from 'react-router';

const FriendIndexItem = ({ friend }) => {

  return (
  <li className="friend-index-item">
    <Link to={`/users/${run.id}`}>
      <img src={`https://maps.googleapis.com/maps/api/staticmap?size=300x150&path=color:0x0c5d94%7Cenc:${run.route.polyline}&key=${window.googleMapsApiKey}`}
            alt={run.route.title}></img>
    </Link>
      {/*<img src={friendRequest.requestor.profile_picture} alt='Profile picture'></img>*/}
      <p>{friend.f_name} {friend.l_name}</p>
  </li>
)};

export default FriendRequestIndexItem;
