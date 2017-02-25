import React from 'react';
import { Link } from 'react-router';

const RouteIndexItem = ({ route }) => {
  return (
    <li className="route-index-item">
          <div className='route-map-img'>
            <Link to={`/routes/${route.id}`}>
            <img src={`https://maps.googleapis.com/maps/api/staticmap?size=300x150&path=color:0x0c5d94%7Cenc:${route.polyline}&key=${window.googleMapsApiKey}`}
                  alt={route.title}></img>
            </Link>
          </div>
        <div className='route-title-and-distance'>
          <span className='route-title'>{route.title}</span>
          <span className='route-distance'>Distance: {route.distance.toFixed(2)} miles</span>
        </div>
    </li>
  );
};

export default RouteIndexItem;
