import React from 'react';
import FriendSearchFilterForm from './friend_search_filter_form';
import FriendSearchResultIndex from './friend_search_result_index';

const FriendSearch = ({ foundUsers,
                        searchString,
                        updateFriendSearchFilter,
                        createFriendRequest,
                        currentUser }) => {
  let friendSearchResultIndex;
  if (searchString === '') {
    friendSearchResultIndex = (<FriendSearchResultIndex
                                    foundUsers={[]} />);
  }
  // Below prevents rendering of bogus results.
  else if (foundUsers.length > 6) {
    friendSearchResultIndex = (<FriendSearchResultIndex
                                    foundUsers={[]} />);
  } else {
    friendSearchResultIndex = (<FriendSearchResultIndex
                                    foundUsers={foundUsers}
                                    createFriendRequest={createFriendRequest}
                                    currentUser={currentUser} />);
  }

  return(
  <div className='friends-search-index'>
      <h3>Find friends by first name, last name, or email:</h3>
      <FriendSearchFilterForm
        searchString={searchString}
        updateFriendSearchFilter={updateFriendSearchFilter} />
      { friendSearchResultIndex }
  </div>);
};

export default FriendSearch;
