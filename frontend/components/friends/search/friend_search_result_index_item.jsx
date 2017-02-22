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
    <div className='friend-search-img-and-name'>
      <div className='friend-search-img'>
        <Link to={`/users/${foundUser.id}`}>
          <img src={foundUser.profile_picture} alt='Profile picture'></img>
        </Link>
      </div>
      <Link to={`/users/${foundUser.id}`}>
        <p>{foundUser.f_name} {foundUser.l_name}</p>
      </Link>
    </div>
    <button onClick={requestFriendShip(foundUser.id)}>ADD</button>
  </li>
)};

export default FriendSearchResultIndexItem;
