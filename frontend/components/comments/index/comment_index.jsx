import React from 'react';
import CommentIndexItemContainer from './comment_index_item_container';
import LoadingIcon from '../../loading/loading_icon';

export default class CommentIndex extends React.Component {
  render() {
    const { comments } = this.props;
    return (
    <section className="comments-index">
      <ul className='comments-list'>
        { comments.sort((x, y) => x.created_at > y.created_at).map(comment => <CommentIndexItemContainer key={ comment.id } comment={ comment } />) }
      </ul>
    </section> );
  }
}
