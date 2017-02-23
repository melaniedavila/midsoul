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
        <div className='activity-details-flex-container'>
          <div className='mini-activity-description-flex-container'>
            <div className='user-thumb-container'>
              <Link to={`/users/${feedItem.feedable.creator.id}`}>
                <img src={feedItem.feedable.creator.profile_picture} alt='Profile picture'></img>
              </Link>
            </div>
            <div className='activity-date-and-description-container'>
              <h4 className='activity-date'>{dateTimeString}</h4>
              <h3>{feedItem.feedable.creator.f_name} created the route {feedItem.feedable.title}</h3>
            </div>
          </div>

          <div className='activity-comments'>
            <CommentIndex comments={feedItem.feedable.comments}/>
          </div>

          <div className='new-comment-container'>
            <NewCommentContainer activityType={feedItem.feedable_type} activityId={feedItem.feedable.id}/>
          </div>
        </div>
      </div>
    );
  } else {
    debugger
    feedIndexItemDetails = (
      <div className='feed-index-item-container'>
        <aside className='feed-index-item-map'>
            <Link to={`/runs/${feedItem.feedable.id}`}>
              <img src={`https://maps.googleapis.com/maps/api/staticmap?size=400x400&path=color:0x0c5d94%7Cenc:${feedItem.feedable.route.polyline}&key=${window.googleMapsApiKey}`}
                    alt='Map'></img>
            </Link>
        </aside>
        <div className='activity-details-flex-container'>
          <div className='mini-activity-description-flex-container'>
            <div className='user-thumb-container'>
              <Link to={`/users/${feedItem.feedable.runner.id}`}>
                <img src={feedItem.feedable.runner.profile_picture} alt='Profile picture'></img>
              </Link>
            </div>
            <div className='activity-date-and-description-container'>
              <h4 className='activity-date'>{dateTimeString}</h4>
              <h3>{feedItem.feedable.runner.f_name} ran {feedItem.feedable.route.distance} miles at a pace of {((feedItem.feedable.duration / 60) / feedItem.feedable.route.distance).toFixed(2)} mins/mi on {activityDate} at {activityTime}</h3>
            </div>
          </div>

          <div className='activity-comments'>
            <CommentIndex comments={feedItem.feedable.comments}/>
          </div>

          <div className='new-comment-container'>
            <NewCommentContainer activityType={feedItem.feedable_type} activityId={feedItem.feedable.id}/>
          </div>
        </div>
      </div>
    );
  }

  return (
  <li className="feed-index-item">
    {feedIndexItemDetails}
  </li>
)};

export default FeedIndexItem;
