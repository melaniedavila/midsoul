import React from 'react';
import FeedIndexItem from './feed_index_item';
import LoadingIcon from '../loading/loading_icon';

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

    feedItems.sort((feedItemA, feedItemB) => {
        return feedItemA.feedable.sortby_date < feedItemB.feedable.sortby_date;
      }
    );

    if (loading) {
      return <LoadingIcon />;
    } else {
      return (
      <section className="feed-index">
        <ul className='feed-items-list'>
          { feedItems.map((feedItem, idx) => {
              return <FeedIndexItem key={idx} feedItem={feedItem} />;
            })
          }
        </ul>
      </section> );
    }
  }
}
