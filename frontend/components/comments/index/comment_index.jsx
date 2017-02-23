import React from 'react';
import CommentIndexItem from './comment_index_item';
import LoadingIcon from '../../loading/loading_icon';

export default class CommentIndex extends React.Component {
  render() {
    const { comments } = this.props;
    return (
    <section className="comments-index">
      <h2 className='comments-header'>Comments</h2>
      <ul className='comments-list'>
        {comments.sort((x, y) => x.created_at > y.created_at).map(comment => <CommentIndexItem key={comment.id} comment={comment} />)}
      </ul>
    </section> );
  }
}
