import React from 'react';
import { Link } from 'react-router';

const RunIndexItem = ({ run }) => {
  return (
  <li className="run-index-item">
    <span className='run-date'>{run.date}</span>
    <Link to={`/runs/${run.id}`}>
      <img src={`https://maps.googleapis.com/maps/api/staticmap?size=300x150&path=color:0x0c5d94%7Cenc:${run.route.polyline}&key=${window.googleMapsApiKey}`}
            alt={run.route.title}></img>
    </Link>
    <span className='run-distance'>Distance: {run.route.distance} miles</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span className='run-pace'>Pace: {((run.duration / 60) / run.route.distance).toFixed(2)} mins/mi</span>
  </li>
)};

export default RunIndexItem;
