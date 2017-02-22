import React from 'react';
import { Link, hashHistory } from 'react-router';
import LoadingIcon from '../../loading/loading_icon';
import ErrorsList from '../../errors/errors_list';
// import UserRunsList from './user_runs_list';
import SingleUserFeedIndex from '../../feed/single_user_feed_index';
import SingleUserFeedIndexContainer from '../../feed/single_user_feed_container';


export default class UserShow extends React.Component {
  componentDidMount() {
    this.props.requestSingleUser(this.props.params.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.userId !== nextProps.params.userId) {
      this.props.requestSingleUser(nextProps.params.userId);
    }
  }

  parseMembershipMonth(dateString) {
    const monthChars = dateString.slice(5, 7);
    switch (monthChars) {
      case '01':
        return 'January';
      case '02':
        return 'February';
      case '03':
        return 'March';
      case '04':
        return 'April';
      case '05':
        return 'May';
      case '06':
        return 'June';
      case '07':
        return 'July';
      case '08':
        return 'August';
      case '09':
        return 'September';
      case '10':
        return 'October';
      case '11':
        return 'November';
      case '12':
        return 'December';
      default:
        return null;
    }
  }

  parseMembershipDate(dateString) {
    const month = this.parseMembershipMonth(dateString);
    const year = dateString.slice(0, 4);
    return `${month} ${year}`;
  }

  redirectToEdit(e) {
    e.preventDefault();
    hashHistory.push(`users/${this.props.user.id}/edit/`);
  }

  render () {
    const user = this.props.user;
    const errors = this.props.errors;
    if (!user) {
      return <LoadingIcon />;
    } else {

      const memberDate = this.parseMembershipDate(user.created_at);
      let editButton;
      if (this.props.currentUser.id === this.props.user.id) {
        editButton = <button onClick={this.redirectToEdit.bind(this)}>EDIT PROFILE</button>;
      }
      return (
        <div className='user-show-details'>
          <div className='user-name-and-edit-button-flex-container'>
            <h2>{user.f_name} {user.l_name}</h2>
            {editButton}
          </div>
          <div className='user-show-and-activity-feed-flex-container'>
            <div className='user-show-details-flex-container'>
              <div className='user-show-details-flex-left'>
                <img src={user.profile_picture} alt='Profile picture'></img>
                <button>ADD FRIEND</button>
              </div>
              <div className='user-show-details-flex-right'>
                <p>Member since: {memberDate}</p>
                <p>Routes: {user.routes.length}</p>
                <p>Runs: {user.runs.length}</p>
              </div>
            </div>
            <div className='user-activity-details'>
              Render user activities here if friend or self
              <SingleUserFeedIndexContainer userId={this.props.user.id}/>
              {/*<UserRunsList runs={user.runs}/>*/}
            </div>
          </div>
        </div>
      );
    }
  }
}
