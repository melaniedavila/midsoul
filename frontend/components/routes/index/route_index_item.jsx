import React from 'react';
import { Link } from 'react-router';

// need router below????
const RouteIndexItem = ({ route, router }) => {
  return (
  <li className="route-index-item">
    <Link to={`/routes/${route.id}`}>
      <span>{route.id}</span>
      <img src={route.image_url} alt={route.title} />
      <span>{route.title}</span>
      <span>{route.description}</span>
      <span>{route.distance}</span>
    </Link>
  </li>
)};

export default RouteIndexItem;
