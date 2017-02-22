import React from 'react';
import { Link } from 'react-router';

const FriendSearchResultIndexItem = ({ foundUser, createFriendRequest, currentUser }) => {

  const requestFriendShip = function (requesteeId) {
    return function (e) {
      e.preventDefault();
      createFriendRequest({
        requestor_id: currentUser.id,
        requestee_id: requesteeId
      })
    }
  }

  return (
  <li className="friend-search-result-index-item">
    <Link to={`/users/${foundUser.id}`}>
      <img src={foundUser.profile_picture} alt='Profile picture'></img>
    </Link>

    <p>{foundUser.f_name} {foundUser.l_name}</p>

    <button onClick={requestFriendShip(foundUser.id)}>ADD</button>
  </li>
)};

export default FriendSearchResultIndexItem;
