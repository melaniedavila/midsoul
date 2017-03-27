import React from 'react';

const handleQueryChange = (filter, updateFriendSearchFilter) => {
  return e => updateFriendSearchFilter(filter, e.currentTarget.value);
};

export default function FriendSearchFilterForm(props) {
  const { searchString, updateFriendSearchFilter } = props;

  return (
    <div className='friend-search-filter-form'>
      <input
        type="text"
        value={searchString}
        onChange={handleQueryChange('searchString', updateFriendSearchFilter)} />
    </div>
  );
}
