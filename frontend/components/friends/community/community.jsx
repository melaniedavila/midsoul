import React from 'react';
import { Link } from 'react-router';
import CommunityTabs from './community_tabs';

export default class Community extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { requestCurrentUserFriends,
            requestCurrentUserReceivedFriendRequests } = this.props;
    requestCurrentUserFriends();
    requestCurrentUserReceivedFriendRequests();
  }

  render() {
    return (
      <main className='community-container'>
        <h2>Community</h2>
        <CommunityTabs desiredURL={ this.props.location.pathname } />
        { this.props.children }
      </main>
    );
  }
}
