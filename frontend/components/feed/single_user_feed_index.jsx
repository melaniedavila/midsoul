import React from 'react';
import LoadingIcon from '../loading/loading_icon';
import FeedIndexItem from './feed_index_item';

export default class SingleUserFeedIndex extends React.Component {
  componentDidMount() {
    const userId = this.props.userId;
    console.log('userId', this.props.userId);
    this.props.requestSingleUserFeedItems(userId);
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps);
    if (this.props.userId !== nextProps.userId) {
      nextProps.requestSingleUserFeedItems(nextProps.userId)
    }
    // this.feedItem = nextProps.feedItem;
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
          {feedItems.map((feedItem, idx) => <FeedIndexItem key={idx} feedItem={feedItem} />)}
        </ul>
      </section> );
    }
  }
}
