import React from 'react';
import { Link, hashHistory } from 'react-router';
import LoadingIcon from '../../loading/loading_icon';
import ErrorsList from '../../errors/errors_list';
import CommentIndex from '../../comments/index/comment_index';
import NewCommentContainer from '../../comments/form/new_comment_container';


export default class RunShow extends React.Component {
  componentDidMount() {
    this.props.requestSingleRun(this.props.params.runId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.runId !== nextProps.params.runId) {
      this.props.requestSingleRun(nextProps.params.runId);
    }
  }

  handleDeleteRunClick(e) {
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

      if (this.props.currentUser.id === run.runner_id) {
        deleteButton = (
          <button
            onClick={this.handleDeleteRunClick()}>
            DELETE RUN
          </button>
        );
      }

      return (
        <div className='run-show-details'>
          <h3>{run.title}</h3>
          <ErrorsList errors={ errors } />
            <div className='run-show-base-details-flex-container'>
                <div className='run-show-user-thumb-container'>
                  <Link to={`/users/${run.runner.id}`}>
                    <img src={run.runner.profile_picture} alt='Profile picture'></img>
                  </Link>
                </div>
              <h4>{run.runner.f_name} ran {run.route.distance} miles on {run.date}&nbsp;
              at a pace of {((run.duration / 60) / run.route.distance).toFixed(2)} mins/mi</h4>
            </div>
          <p>{run.description}</p>

          <div className='run-show-links'>
            <Link to="/my-runs">Back to My Runs</Link>
            {deleteButton}
          </div>

          <div className='run-show-map'>
            <img src={`https://maps.googleapis.com/maps/api/staticmap?size=700x350&path=color:0x0c5d94%7Cenc:${run.route.polyline}&key=${window.googleMapsApiKey}`}
              alt={run.route.title}></img>
          </div>


          <div className='run-comment-index-and-form'>
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


// let deleteButton;
// debugger
// if (this.props.currentUser.id === run.runner_id) {
//   deleteButton = (<button
//                   onClick={this.handleDeleteRunClick()}>
//                   DELETE RUN
//                 </button>);
// }
// {deleteButton}
