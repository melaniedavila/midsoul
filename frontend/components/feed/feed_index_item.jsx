import React from 'react';
import { Link } from 'react-router';
import CommentIndex from '../comments/index/comment_index';
import NewCommentContainer from '../comments/form/new_comment_container';

const FeedIndexItem = ({ feedItem }) => {
  let feedIndexItemDetails;
  const activityDateTime = new Date(feedItem.feedable.created_at)
  const activityDate = activityDateTime.toDateString();
  const activityTime = activityDateTime.toLocaleTimeString();
  const dateTimeString = `${activityDate} ${activityTime}`

  if (feedItem.feedable_type === 'Route') {
    feedIndexItemDetails = (
      <section className='feed-index-item-container'>
        <div className='user-thumb-container'>
          <Link to={`/users/${feedItem.feedable.creator.id}`}>
            <img src={feedItem.feedable.creator.profile_picture} alt='Profile picture'></img>
          </Link>
        </div>
        <div className='activity-details-flex-container'>
          <div className='activity-date-and-description-container'>
            <div className='date-and-description'>
              <h4 className='activity-date'>{dateTimeString}</h4>
              <div className='user-name-and-activity-description'>
                <h3>{feedItem.feedable.creator.f_name} created the route {feedItem.feedable.title}</h3>
              </div>
            </div>
            <i className="fa fa-map-marker" aria-hidden="true"></i>
          </div>
          <div className='activity-map-and-distance-container'>
            <div className='mini-activity-map'>
              <Link to={`/routes/${feedItem.feedable.id}`}>
                <img src={`https://maps.googleapis.com/maps/api/staticmap?size=280x160&path=color:0x0c5d94%7Cenc:${feedItem.feedable.polyline}&key=${window.googleMapsApiKey}`}
                  alt='Map'></img>
              </Link>
            </div>
            <div className='activity-distance-container'>
              <div className='distance-icon-and-label'>
                <i className="fa fa-road" aria-hidden="true"></i>
                <p>Distance</p>
              </div>
              <p>{feedItem.feedable.distance} mi</p>
            </div>
          </div>
          <div className='activity-comments-container'>
          </div>
        </div>
      </section>




    );
  } else {
    feedIndexItemDetails = (
      <section className='feed-index-item-container'>
        <div className='user-thumb-container'>
          <Link to={`/users/${feedItem.feedable.runner.id}}`}>
            <img src={feedItem.feedable.runner.profile_picture} alt='Profile picture'></img>
          </Link>
        </div>
        <div className='activity-details-flex-container'>
          <div className='activity-date-and-description-container'>
            <div className='date-and-description'>
              <h4 className='activity-date'>{dateTimeString}</h4>
              <div className='user-name-and-activity-description'>
                <h3>{feedItem.feedable.runner.f_name} ran {feedItem.feedable.route.distance} miles at a pace of {((feedItem.feedable.duration / 60) / feedItem.feedable.route.distance).toFixed(2)} mins/mi</h3>
              </div>
            </div>
            <img src={window.midSoulAssets.runIcon} alt='Running Silhouette'></img>
          </div>
          <div className='activity-map-and-distance-container'>
            <div className='activity-distance-container'>
              <div className='distance-icon-and-label'>
                <i className="fa fa-road" aria-hidden="true"></i>
                <p>Distance</p>
              </div>
              <p>{feedItem.feedable.route.distance} mi</p>
            </div>
            <div className='mini-activity-map'>
              <Link to={`/runs/${feedItem.feedable.id}`}>
                <img src={`https://maps.googleapis.com/maps/api/staticmap?size=280x160&path=color:0x0c5d94%7Cenc:${feedItem.feedable.route.polyline}&key=${window.googleMapsApiKey}`}
                  alt='Map'></img>
              </Link>
            </div>
          </div>
          <div className='activity-comments-container'>
          </div>
        </div>
      </section>
    );
  }

  return (
  <li className="feed-index-item">
    {feedIndexItemDetails}
  </li>
)};

export default FeedIndexItem;
