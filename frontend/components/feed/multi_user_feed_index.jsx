import React from 'react';
import LoadingIcon from '../loading/loading_icon';
import FeedIndexItem from './feed_index_item';

export default class MultiUserFeedIndex extends React.Component {
  componentDidMount() {
    this.props.requestMultiUserFeedItems();
  }

  render() {
    const { feedItems, loading } = this.props;

    feedItems.sort((feedItemA, feedItemB) => {
      if (feedItemA.feedable_type === 'Route') {
        var sortby_date1 = feedItemA.feedable.sortby_date
      } else if (feedItemA.feedable_type === 'Run') {
        var sortby_date1 = `${feedItemA.feedable.date}T00:00:00-05:00`
      }

      if (feedItemB.feedable_type === 'Route') {
        var sortby_date2 = feedItemB.feedable.sortby_date
      } else if (feedItemB.feedable_type === 'Run') {
        var sortby_date2 = `${feedItemB.feedable.date}T00:00:00-05:00`
      }

      return sortby_date1 < sortby_date2;
    });

    if (loading) {
      return <LoadingIcon />;
    } else if (feedItems.length === 0) {
      return (
                <div className='empty-feed'>
                  <h2>Activity Feed</h2>
                  <h4>There are no activities to display.</h4>
                </div>
              );
    } else {
      return (
        <section className="feed-index">
          <h2>Activity Feed</h2>
          <ul className='feed-items-list'>
            { feedItems.map((feedItem, idx) => {
                return <FeedIndexItem key={idx} feedItem={feedItem} />;
              })
            }
          </ul>
        </section>
      );
    }
  }
}
