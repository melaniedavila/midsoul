import React from 'react';
import LoadingIcon from '../loading/loading_icon';
import FeedIndexItem from './feed_index_item';

export default class MultiUserFeedIndex extends React.Component {
  componentDidMount() {
    this.props.requestMultiUserFeedItems();
  }

  render() {
    const { feedItems, loading } = this.props;

    feedItems.sort((feedItemA, feedItemB) => feedItemA.feedable.sortby_date < feedItemB.feedable.sortby_date);

    if (loading) {
      return <LoadingIcon />;
    } else if (feedItems.length === 0) {
      return (<div className='empty-feed'>
                <h2>Activity Feed</h2>
                <h4>There are no activities to display.</h4>
              </div>)
    } else {
      return (
      <section className="feed-index">
        <h2>Activity Feed</h2>
        <ul className='feed-items-list'>
          {feedItems.map((feedItem, idx) => {
            return <FeedIndexItem key={idx} feedItem={feedItem} />
          })}
        </ul>
      </section> );
    }
  }
}
