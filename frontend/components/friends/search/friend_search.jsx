import React from 'react';
import FriendSearchFilterForm from './friend_search_filter_form';
import FriendSearchResultIndex from './friend_search_result_index';
import FriendSearchResultIndexItem from './friend_search_result_index_item';

const FriendSearch = ({ foundUsers, searchString, updateFriendSearchFilter, createFriendRequest, currentUser }) => (
  <div>
      <h3>FIND FRIENDS BY FIRST NAME, LAST NAME, OR EMAIL</h3>
      <FriendSearchFilterForm
        searchString={searchString}
        updateFriendSearchFilter={updateFriendSearchFilter} />
      <FriendSearchResultIndex foundUsers={foundUsers}
                                createFriendRequest={createFriendRequest}
                                currentUser={currentUser}/>
  </div>
);

export default FriendSearch;
