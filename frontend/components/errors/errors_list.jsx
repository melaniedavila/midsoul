import React from 'react';

export default function ErrorsList({ errors }) {
  if (!errors){
    return null;
  }

  const errorListItems = errors.map(error => {
    if (error === "F name can't be blank") {
      error = "First name can't be blank";
    } else if (error === "L name can't be blank") {
      error = "Last name can't be blank";
    }

    return <li key={error}>{error}</li>;
  });
  return (
    <ul>
      { errorListItems }
    </ul>
  );
}
