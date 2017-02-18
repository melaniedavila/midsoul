import React from 'react';
import { Link } from 'react-router';

// need router below????
const RunIndexItem = ({ run, router }) => {
  return (
  <li className="run-index-item">
    <Link to={`/runs/${run.id}`}>
      <span>{run.id}</span>
      <img src={run.route.image_url} alt={run.title} />
      <span>Date: {run.date}</span>
      <br/>

      <span>Description: {run.description}</span>
      <br/>

      <span>Duration: {run.duration}</span>
      <br/>

      <span>Distance: {run.route.distance}</span>
      <br/>
      <br/>
    </Link>
  </li>
)};

export default RunIndexItem;
