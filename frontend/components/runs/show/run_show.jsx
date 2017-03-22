import { Link, hashHistory } from 'react-router';
import CommentIndex from '../../comments/index/comment_index';
import ErrorsList from '../../errors/errors_list';
import LoadingIcon from '../../loading/loading_icon';
import NewCommentContainer from '../../comments/form/new_comment_container';
import React from 'react';

export default class RunShow extends React.Component {
  componentDidMount () {
    this.props.requestSingleRun(this.props.params.runId);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.params.runId !== nextProps.params.runId) {
      this.props.requestSingleRun(nextProps.params.runId);
    }
  }

  formatRunDate () {
    const runDate = this.props.run.date;
    return [runDate.slice(5, 7), runDate.slice(8,10), runDate.slice(2,4)].join('-');
  }

  handleDeleteRunClick (e) {
    return (e) => {
      e.preventDefault();
      this.props.deleteRun(this.props.run.id)
        .then(() => (hashHistory.push('/my-runs')));
    };
  }

  render () {
    const run = this.props.run;
    const errors = this.props.errors;

    if (!run || !run.runner) {
      return <LoadingIcon />;
    } else {
      let deleteButton;
      const currentUser = this.props.currentUser;
      if (currentUser && currentUser.id === run.runner_id) {
        deleteButton = (
          <button
            onClick={this.handleDeleteRunClick()}>
            DELETE RUN
          </button>
        );
      }

      const dateString = this.formatRunDate();
      return (
        <div className='run-show-details'>
          <div className='run-icon-and-title'>
            <img src={window.midSoulAssets.runIcon} alt='Running Silhouette'></img>
            <h3>{run.title}</h3>
          </div>
          <ErrorsList errors={ errors } />
          <div className='run-show-base-details-flex-container'>
              <div className='run-show-user-thumb-container'>
                <Link to={`/users/${run.runner.id}`}>
                  <img src={run.runner.profile_picture} alt='Profile picture'></img>
                </Link>
              </div>
              <div className='run-date-and-description-container'>
                <h4 className='run-date'>{dateString}</h4>
                <h3>{run.description}</h3>
              </div>
          </div>
          <div className='run-show-stats-container'>
            <div className='run-distance-flex-container'>
              <p className='tag'>Distance:</p>
              <p className='measurement'>{(run.route.distance).toFixed(2)}</p>
              <p className='unit'>miles</p>
            </div>

            <div className='run-duration-flex-container'>
              <p className='tag'>Duration:</p>
              <p className='measurement'>{(run.duration / 60).toFixed(2)}</p>
              <p className='unit'>mins</p>
            </div>

            <div className='run-pace-flex-container'>
              <p className='tag'>Pace:</p>
              <p className='measurement'>{((run.duration / 60) / run.route.distance).toFixed(2)}</p>
              <p className='unit'>mins/mi</p>
            </div>
          </div>

          <div className='run-show-links'>
            <Link to="/my-runs">Back to My Runs</Link>
            {deleteButton}
          </div>

          <div className='run-show-map'>
            <Link to={`/routes/${run.route.id}`}>
              <img src={`https://maps.googleapis.com/maps/api/staticmap?size=700x350&path=color:0x0c5d94%7Cenc:${run.route.polyline}&key=${window.googleMapsApiKey}`}
                alt={run.route.title}></img>
            </Link>
          </div>

          <div className='run-comment-index-and-form'>
            <h2>Comments</h2>
            <div className='run-show-comments'>
              <CommentIndex comments={run.comments}/>
            </div>
            <div className='run-show-new-comment-form'>
              <NewCommentContainer activityType={'Run'} activityId={run.id}/>
            </div>
          </div>
        </div>
      );
    }
  }
}
