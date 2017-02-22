import React from 'react';
import FriendSearchFilterForm from './friend_search_filter_form';
import FriendSearchResultIndex from './friend_search_result_index';
import FriendSearchResultIndexItem from './friend_search_result_index_item';

const FriendSearch = ({ foundUsers, searchString, updateFriendSearchFilter, createFriendRequest, currentUser }) => {
  let friendSearchResultIndex;
  if (searchString === '') {
    friendSearchResultIndex = (<FriendSearchResultIndex foundUsers={[]}/>);
  } else {
    friendSearchResultIndex = (<FriendSearchResultIndex foundUsers={foundUsers}
                                    createFriendRequest={createFriendRequest}
                                    currentUser={currentUser}/>);
  }

  return(
  <div>
      <h3>FIND FRIENDS BY FIRST NAME, LAST NAME, OR EMAIL</h3>
      <FriendSearchFilterForm
        searchString={searchString}
        updateFriendSearchFilter={updateFriendSearchFilter} />
      {friendSearchResultIndex}
  </div>);
};

export default FriendSearch;
