import React from 'react';
import LoadingIcon from '../loading/loading_icon';
import FeedIndexItem from './feed_index_item';

export default class SingleUserFeedIndex extends React.Component {
  componentDidMount() {
    const userId = this.props.userId;
    this.props.requestSingleUserFeedItems(userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.userId !== nextProps.userId) {
      nextProps.requestSingleUserFeedItems(nextProps.userId)
    }
  }

  render() {
    const { feedItems, loading } = this.props;
    if (loading) {
      return <LoadingIcon />;
    } else {
      return (
      <section className="feed-index">
        <ul className='feed-items-list'>
          {feedItems.reverse().map((feedItem, idx) => <FeedIndexItem key={idx} feedItem={feedItem} />)}
        </ul>
      </section> );
    }
  }
}
