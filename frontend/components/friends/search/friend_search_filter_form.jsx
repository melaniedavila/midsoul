import React from 'react';

const handleQueryChange = (filter, updateFilter) => (
  e => updateFriendSearchFilter(filter, e.currentTarget.value)
);

export default function FriendSearchFilterForm({ searchString, updateFriendSearchFilter }) {
  return (
    <div>
      <input
        type="text"
        value={searchString}
        onChange={handleQueryChange('searchString', updateFriendSearchFilter)}/>
    </div>
  );
}
