import { Link, hashHistory } from 'react-router';
import ErrorsList from '../../errors/errors_list';
import LoadingIcon from '../../loading/loading_icon';
import React from 'react';
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

  submitFriendRequest(e) {
    e.preventDefault();
    const requestor_id = this.props.currentUser.id;
    const requestee_id = this.props.user.id;
    this.props.createFriendRequest({
      requestor_id,
      requestee_id
    });

    $('.friend-button').text('PENDING')
  }

  render () {
    const user = this.props.user;
    const errors = this.props.errors;
    const loading = this.props.loading;

    if (loading || !user) {
      return <LoadingIcon />;
    } else {
      const memberDate = this.parseMembershipDate(user.created_at);
      let editButton;
      let profilePictureClass;
      const currentUser = this.props.currentUser;
      if ( currentUser && currentUser.id === user.id) {
        editButton = <button onClick={this.redirectToEdit.bind(this)}>EDIT PROFILE</button>;
      } else if (currentUser && currentUser.id !== user.id) {
        profilePictureClass = 'other-user-profile-pic'
      }

      let friendshipButtonOrStatus;
      if (user.currentUserFriendRequest) {
        if (user.currentUserFriendRequest.status === 'accepted') {
          friendshipButtonOrStatus = (<p className="user-show-friend-request-status">
            FRIENDS<i className="fa fa-check" aria-hidden="true"></i>
          </p>);
        } else {
        friendshipButtonOrStatus = (<p className="user-show-friend-request-status">
          { user.currentUserFriendRequest.status }
        </p>);
        }
      } else if (currentUser && currentUser.id === user.id) {
        friendshipButtonOrStatus = (<p></p>);
      } else {
        friendshipButtonOrStatus = (<button className='friend-button'
                                    onClick={this.submitFriendRequest.bind(this)}>
                                    ADD FRIEND</button>);
      }

      return (
        <div className='user-show-details'>
          <div className='user-show-and-activity-feed-flex-container'>
            <div className='user-show-details-flex-container'>
              <div className='user-show-details-flex-left'>
                <div className='user-name-and-edit-button-flex-container'>
                  <h2>{user.f_name} {user.l_name}</h2>
                  <div>{editButton}</div>
                </div>
                <img className={profilePictureClass} src={user.profile_picture} alt='Profile picture'></img>
                {friendshipButtonOrStatus}
                <div className='user-show-details-flex-user-stats'>
                  <div className='user-stat-tags'>
                    <p>Member Since: </p>
                    <p>Routes: </p>
                    <p>Runs: </p>
                  </div>
                  <div className='user-stat-counts'>
                    <p>{memberDate}</p>
                    <p>{user.routes.length}</p>
                    <p>{user.runs.length}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='user-activity-details'>
              <SingleUserFeedIndexContainer userId={this.props.user.id}/>
            </div>
          </div>
        </div>
      );
    }
  }
}
