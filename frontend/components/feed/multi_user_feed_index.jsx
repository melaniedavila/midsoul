import React from 'react';
import LoadingIcon from '../loading/loading_icon';
import FeedIndexItem from './feed_index_item';

export default class MultiUserFeedIndex extends React.Component {
  componentDidMount() {
    this.props.requestMultiUserFeedItems();
  }

  render() {
    const { feedItems, loading } = this.props;
    if (loading) {
      return <LoadingIcon />;
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
