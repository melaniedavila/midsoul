import React from 'react';
import FriendSearchResultIndexItem from './friend_search_result_index_item';
import LoadingIcon from '../../loading/loading_icon';


const FriendSearchResultIndex = ({ foundUsers, createFriendRequest }) => (
  <div>
    {foundUsers.map((foundUser) => <FriendSearchResultIndexItem
                                        key={foundUser.id}
                                        foundUser={foundUser}
                                        createFriendRequest={createFriendRequest}
                                        currentUser={currentUser}/>)}
  </div>
);

export default FriendSearchResultIndex;
