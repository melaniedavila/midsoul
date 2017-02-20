import React from 'react';
import { Link } from 'react-router';

const RunIndexItem = ({ run }) => {
  return (
  <li className="run-index-item">
    <span>Date: {run.date}</span>
    <span>Distance: {run.route.distance} miles</span>
    <span>Pace: {((run.duration / 60) / run.route.distance).toFixed(2)} mins/mi</span>
    <Link to={`/runs/${run.id}`}>
      <img src={`https://maps.googleapis.com/maps/api/staticmap?size=300x150&path=color:0x0c5d94%7Cenc:${run.route.polyline}&key=${window.googleMapsApiKey}`}
            alt={run.route.title}></img>
    </Link>
  </li>
)};

export default RunIndexItem;
