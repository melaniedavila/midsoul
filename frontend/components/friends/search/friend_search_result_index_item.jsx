import React from 'react';
import { Link } from 'react-router';

const FriendSearchResultIndexItem = ({ foundUser, createFriendRequest, currentUser }) => {
  const requestFriendShip = function (requesteeId) {
    return function (e) {
      e.preventDefault();
      createFriendRequest({
        requestor_id: currentUser.id,
        requestee_id: requesteeId
      });
    };
  };

  let buttonOrStatus;

  if (foundUser.currentUserFriendRequest) {
    buttonOrStatus = (<p className="friend-request-status">
      { foundUser.currentUserFriendRequest.status }
    </p>);
  } else {
    buttonOrStatus = (<button
      className='friend-button'
      data-found-user-id={foundUser.id}
      onClick={requestFriendShip(foundUser.id)}>Add</button>);
  }

  return (
    <li className="friend-search-result-index-item">
      <div className='friend-search-img-and-name'>
        <div className='friend-search-img'>
          <Link to={`/users/${foundUser.id}`}>
            <img  src={foundUser.profile_picture}
                  alt='Profile picture'></img>
          </Link>
        </div>
        <Link to={`/users/${foundUser.id}`}>
          <p>{ foundUser.f_name } { foundUser.l_name }</p>
        </Link>
      </div>
      { buttonOrStatus }
    </li>
  );
};

export default FriendSearchResultIndexItem;
