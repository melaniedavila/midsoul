import React from 'react';
import Link from 'react-router';
//Presentational component
export default class CommunityTabs extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    switch (this.props.desiredURL) {
      case '/community/friends':
        $("a.friends").addClass("selected-tab");
        break;
      case '/community/find-friends':
        $("a.find-friends").addClass("selected-tab");
        break;
      case '/community/friend-requests':
        $("a.friend-requests").addClass("selected-tab");
        break;
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.desiredURL !== nextProps.desiredURL) {
      switch (nextProps.desiredURL) {
        case '/community/friends':
          $("a.friends").addClass("selected-tab");
          $("a.find-friends").removeClass("selected-tab");
          $("a.friend-requests").removeClass("selected-tab");
          break;
        case '/community/find-friends':
          $("a.find-friends").addClass("selected-tab");
          $("a.friends").removeClass("selected-tab");
          $("a.friend-requests").removeClass("selected-tab");
          break;
        case '/community/friend-requests':
          $("a.friend-requests").addClass("selected-tab");
          $("a.friends").removeClass("selected-tab");
          $("a.find-friends").removeClass("selected-tab");
          break;
      }
    }
  }

  render() {
    return (
      <div className="community-tabs-flex-container">
        <div className="community-tabs-friends">
          <Link
            className='friends'
            to='/community/friends'
            >MY FRIENDS</Link>
        </div>
        <div className="community-tabs-find-friends">
          <Link
            className='find-friends'
            to='/community/find-friends'
            >FIND FRIENDS</Link>
        </div>
        <div className='community-tabs-friend-requests'>
          <Link
            className='friend-requests'
            to='/friends/friend-requests'
            >FRIEND REQUESTS</Link>
        </div>
      </div>
    );
  }
}
