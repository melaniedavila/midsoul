import React from 'react';

const handleQueryChange = (filter, updateFriendSearchFilter) => {
  return e => updateFriendSearchFilter(filter, e.currentTarget.value);
};

export default function FriendSearchFilterForm(props) {
  const { searchString, updateFriendSearchFilter } = props;

  return (
    <div>
      <input
        type="text"
        value={searchString}
        onChange={handleQueryChange('searchString', updateFriendSearchFilter)}/>
    </div>
  );
}
