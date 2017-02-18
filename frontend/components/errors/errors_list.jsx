import React from 'react';

export default function ErrorsList({ errors }) {
  if (!errors){
    return null;
  }

  const errorListItems = errors.map(error => <li key={error}>{error}</li>);
  debugger
  return (
    <ul>
      { errorListItems }
    </ul>
  );
}
