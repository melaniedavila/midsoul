import React from 'react';
import { Link } from 'react-router';
import CommentIndex from '../comments/index/comment_index';

const FeedIndexItem = ({ feedItem }) => {
  let feedIndexItemDetails;
  debugger

  if (feedItem.feedable_type === 'Route') {

    feedIndexItemDetails = (
      <div className='feed-index-item-container'>
        <aside className='feed-index-item-map'>
          <Link to={`/routes/${feedItem.feedable.id}`}>
            <img src={`https://maps.googleapis.com/maps/api/staticmap?size=400x400&path=color:0x0c5d94%7Cenc:${feedItem.feedable.polyline}&key=${window.googleMapsApiKey}`}
                  alt='Map'></img>
          </Link>
        </aside>
        <main className='activity-details-flex-container'>
          <div className='mini-activity-description-flex-container'>
            <div className='user-thumb-container'>
              <Link to={`/users/${feedItem.feedable.creator.id}`}>
                <img src={feedItem.feedable.creator.profile_picture} alt='Profile picture'></img>
              </Link>
            </div>
            <h3>{feedItem.feedable.creator.f_name} created the route {feedItem.feedable.title}</h3>
          </div>
          <div className='activity-comments'>
            <CommentIndex comments={feedItem.feedable.comments}/>
          </div>
        </main>
      </div>
    );
  } else {
    feedIndexItemDetails = (
      <div className='feed-index-item-container'>
        <aside className='feed-index-item-map'>
            <Link to={`/runs/${feedItem.feedable.id}`}>
              <img src={`https://maps.googleapis.com/maps/api/staticmap?size=400x400&path=color:0x0c5d94%7Cenc:${feedItem.feedable.route.polyline}&key=${window.googleMapsApiKey}`}
                    alt='Map'></img>
            </Link>
        </aside>
        <main className='activity-details-flex-container'>
          <div className='mini-activity-description-flex-container'>
            <div className='user-thumb-container'>
              <Link to={`/users/${feedItem.feedable.runner.id}`}>
                <img src={feedItem.feedable.runner.profile_picture} alt='Profile picture'></img>
              </Link>
            </div>
            <h3>{feedItem.feedable.runner.f_name} ran {feedItem.feedable.route.distance} miles at a pace of {((feedItem.feedable.duration / 60) / feedItem.feedable.route.distance).toFixed(2)} mins/mi</h3>
          </div>
          <div className='activity-comments'>
            <CommentIndex comments={feedItem.feedable.comments}/>
          </div>
        </main>
      </div>
    );
  }

  return (
  <li className="feed-index-item">
    {feedIndexItemDetails}
  </li>
)};

export default FeedIndexItem;
