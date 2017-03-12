import React from 'react';
import { Link } from 'react-router';

const CommentIndexItem = ({ comment, currentUser, deleteComment }) => {
  const commentDateTime = new Date(comment.created_at);
  const commentDate = commentDateTime.toDateString();
  const commentTime = commentDateTime.toLocaleTimeString();
  const dateTimeString = `${commentDate} ${commentTime}`;

  const deleteFeedItemComment = function (commentId) {
    return (e) => {
      e.preventDefault();
      deleteComment(commentId);
    };
  };

  let deleteButton;
  if (currentUser && currentUser.id === comment.author_id) {
    deleteButton = (<button onClick={deleteFeedItemComment(comment.id)}>Delete</button>);
  }

  return (
  <li className="comment-index-item">
    <div className='comment-author-img'>
      <Link to={`/users/${comment.author.id}`}>
        <img src={comment.author.profile_picture} alt='Profile picture'></img>
      </Link>
    </div>

    <div className='comment-details'>
      <div className='comment-vertical-flex-container'>
        <p className='comment-date'>{dateTimeString}</p>
        <div className='comment-author-name-and-comment-body'>
          <Link to={`/users/${comment.author.id}`}>
            <p className='comment-author-name'>{comment.author.f_name}:</p>
          </Link>
          <p className='comment-body'>{comment.body}</p>
        </div>
      </div>
      <div className='delete-comment'>
        {deleteButton}
      </div>
    </div>
  </li>
)};

export default CommentIndexItem;
