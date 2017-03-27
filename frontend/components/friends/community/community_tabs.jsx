import React from 'react';
import { Link } from 'react-router';

export default class CommunityTabs extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    switch (this.props.desiredURL) {
      case '/community/friends':
        $("a.friends").addClass("active");
        break;
      case '/community/find-friends':
        $("a.find-friends").addClass("active");
        break;
      case '/community/friend-requests':
        $("a.friend-requests").addClass("active");
        break;
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.desiredURL !== nextProps.desiredURL) {
      switch (nextProps.desiredURL) {
        case '/community/friends':
          $("a.friends").addClass("active");
          $("a.find-friends").removeClass("active");
          $("a.friend-requests").removeClass("active");
          break;
        case '/community/find-friends':
          $("a.find-friends").addClass("active");
          $("a.friends").removeClass("active");
          $("a.friend-requests").removeClass("active");
          break;
        case '/community/friend-requests':
          $("a.friend-requests").addClass("active");
          $("a.friends").removeClass("active");
          $("a.find-friends").removeClass("active");
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
            >My Friends</Link>
        </div>
        <div className="community-tabs-find-friends">
          <Link
            className='find-friends'
            to='/community/find-friends'
            >Find Friends</Link>
        </div>
        <div className='community-tabs-friend-requests'>
          <Link
            className='friend-requests'
            to='/community/friend-requests'
            >Friend Requests</Link>
        </div>
      </div>
    );
  }
}
