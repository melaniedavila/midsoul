import React from 'react';
import { Link } from 'react-router';

const RunIndexItem = ({ run }) => {
  const runMonth = run.date.slice(5, 7);
  const runDay = run.date.slice(8);
  const runYear = run.date.slice(2, 4);

  return (
  <li className="run-index-item">
    <span className='run-date'>{runMonth}-{runDay}-{runYear}</span>
    <Link to={`/runs/${run.id}`}>
      <img src={`https://maps.googleapis.com/maps/api/staticmap?size=300x150&path=color:0x0c5d94%7Cenc:${run.route.polyline}&key=${window.googleMapsApiKey}`}
            alt={run.route.title}></img>
    </Link>
    <span className='run-distance'>Distance: {run.route.distance.toFixed(2)} miles</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span className='run-pace'>Pace: {((run.duration / 60) / run.route.distance).toFixed(2)} mins/mi</span>
  </li>
)};

export default RunIndexItem;
