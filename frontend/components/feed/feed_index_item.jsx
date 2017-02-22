import React from 'react';
import { Link } from 'react-router';

const FeedIndexItem = ({ feedItem }) => {
  debugger
  let feedIndexItemDetails;
  if (feedItem.feedable_type === 'Route') {

    feedIndexItemDetails = (
      <div>
        <aside className='feed-index-item-map'>
          <img src={`https://maps.googleapis.com/maps/api/staticmap?size=300x150&path=color:0x0c5d94%7Cenc:${feedItem.feedable.polyline}&key=${window.googleMapsApiKey}`}
                alt='Map'></img>
        </aside>
        <main className='activity-details-flex-container'>
          <div className='mini-activity-description-flex-container'>
            <img src={feedItem.feedable.creator.profile_picture} alt='Profile picture'></img>
            <h3>{feedItem.feedable.creator.f_name} created the route {feedItem.feedable.title}</h3>
          </div>
          <div className='activity-comments'>
            Enter Comments Here
          </div>
        </main>
      </div>
    );
  } else {
    feedIndexItemDetails = (
      <div>
        <aside className='feed-index-item-map'>
          <img src={`https://maps.googleapis.com/maps/api/staticmap?size=300x150&path=color:0x0c5d94%7Cenc:${feedItem.feedable.route.polyline}&key=${window.googleMapsApiKey}`}
                alt='Map'></img>
        </aside>
        <main className='activity-details-flex-container'>
          <div className='mini-activity-description-flex-container'>
            <img src={feedItem.feedable.runner.profile_picture} alt='Profile picture'></img>
            <h3>{feedItem.feedable.runner.f_name} ran {feedItem.feedable.route.distance} miles at a pace of {((feedItem.feedable.duration / 60) / feedItem.feedable.route.distance).toFixed(2)} mins/mi</h3>
          </div>
          <div className='activity-comments'>
            Enter Comments Here
          </div>
        </main>
      </div>
    );
  }

  // debugger
  return (
  <li className="feed-index-item">
    {feedIndexItemDetails}
  </li>
)};

export default FeedIndexItem;
