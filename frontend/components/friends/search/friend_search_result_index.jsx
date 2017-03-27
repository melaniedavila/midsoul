import React from 'react';
import FriendSearchResultIndexItem from './friend_search_result_index_item';

const FriendSearchResultIndex = ({ foundUsers, createFriendRequest, currentUser }) => (
  <ul className='friend-search-results'>
    { foundUsers.map((foundUser, idx) => {
        return (<FriendSearchResultIndexItem
                              key={idx}
                              foundUser={foundUser}
                              createFriendRequest={createFriendRequest}
                              currentUser={currentUser} />);
                })
    }
  </ul>
);

export default FriendSearchResultIndex;
