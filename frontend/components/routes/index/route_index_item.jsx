import React from 'react';
import { Link } from 'react-router';

// need router below????
const RouteIndexItem = ({ route, router }) => {
  return (
  <li className="route-index-item">
      <span className='route-title'>{route.title}</span>
        <div className='route-map-img'>
          <Link to={`/routes/${route.id}`}>
          <img src={`https://maps.googleapis.com/maps/api/staticmap?size=300x150&path=color:0x0c5d94%7Cenc:${route.polyline}&key=${window.googleMapsApiKey}`}
                alt={route.title}></img>
          </Link>
        </div>
      <span className='route-distance'>Distance: {route.distance.toFixed(2)} miles</span>
  </li>
)};

export default RouteIndexItem;
