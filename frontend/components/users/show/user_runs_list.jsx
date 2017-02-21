import React from 'react';

export default function UserRunsList({runs}) {
  if (!runs){
    return null;
  }

  const userRunListItems = runs.map(run => {
    return(
      <li key={run.id}>
        <h4>{run.runner.f_name} ran {run.route.distance} miles on {run.date}&nbsp;</h4>
          <div className='run-feed-map'>
            <img src={`https://maps.googleapis.com/maps/api/staticmap?size=500x250&path=color:0x0c5d94%7Cenc:${run.route.polyline}&key=${window.googleMapsApiKey}`}
              alt={run.route.title}></img>
          </div>
      </li>
    );
  });

  return (
    <ul>
      { userRunListItems }
    </ul>
  );
}
