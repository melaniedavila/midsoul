import React from 'react';
import { Link, hashHistory } from 'react-router';
import LoadingIcon from '../../loading/loading_icon';
import ErrorsList from '../../errors/errors_list';


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

  render () {
    const user = this.props.user;
    const errors = this.props.errors;
    if (!user) {
      return <LoadingIcon />;
    } else {

      const memberDate = this.parseMembershipDate(user.created_at);

      return (
        <div className='user-show-details'>
          <h2>{user.f_name} {user.l_name}</h2>
          <div className='user-show-and-activity-feed-flex-container'>
            <div className='user-show-details-flex-container'>
              <div className='user-show-details-flex-left'>
                <p>User image here</p>
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
            </div>
          </div>
        </div>
      );
    }
  }
}


// if (!user) {
//   return <LoadingIcon />;
// } else {
//   return (
//     <div className='run-show-details'>
//       <h3>{run.title}</h3>
//       <ErrorsList errors={ errors } />
//       <h4>{run.runner.f_name} ran {run.route.distance} miles on {run.date}&nbsp;
//       at a pace of {((run.duration / 60) / run.route.distance).toFixed(2)} mins/mi</h4>
//
//       <p>{run.description}</p>
//
//       <div className='run-show-links'>
//         <Link to="/my-users">Back to My Runs</Link>
//         {deleteButton}
//       </div>
//
//       <div className='run-show-map'>
//         <img src={`https://maps.googleapis.com/maps/api/staticmap?size=500x250&path=color:0x0c5d94%7Cenc:${run.route.polyline}&key=${window.googleMapsApiKey}`}
//           alt={run.route.title}></img>
//       </div>
//     </div>
//   );
// }
