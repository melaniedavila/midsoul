import React from 'react';
import { Link, hashHistory } from 'react-router';
import LoadingIcon from '../../loading/loading_icon';
import ErrorsList from '../../errors/errors_list';


export default class UserEdit extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.state = this.props.user;
  }
  componentDidMount() {
    if (this.props.params) {
      this.props.requestSingleUser(this.props.params.userId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.userId !== nextProps.params.userId) {
      this.props.requestSingleUser(nextProps.params.userId);
    }
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateUser(this.state);
  }

  errors() {
    if (this.props.errors.length > 0) {
      const errorListItems = this.props.errors.map((error, idx) => {
          return (<li className="error" key={idx}>{error}</li>);
        });

      return (<ul>{ errorListItems }</ul>);
    }
  }

  // redirectToOwnEditPage(){
  //   return hashHistory.push(`users/${this.props.currentUser.id}/edit`);
  // }

  render () {
    const user = this.props.user;
    const errors = this.props.errors;
    if (!user) {
      return <LoadingIcon />;
    // } else if (this.props.currentUser.id !== user.id) {
    //   this.redirectToOwnEditPage();
    } else {
      debugger
      return (
        <main className='edit-profile-main'>
          <h3 className='edit-profile-header'>EDIT PROFILE</h3>
          {/*TODO: add prof pic*/}
          <form onSubmit={this.handleSubmit}>
            <div className='errors-list'>
              {this.errors()}
            </div>

            <label>First Name:</label>
            <input type='text'
              value={this.state.f_name}
              onChange={this.update('f_name')}/>

            <label>Last Name:</label>
            <input type='text'
              value={this.state.l_name}
              onChange={this.update('l_name')}/>

            <label>Profile Picture:</label>
            <input  type='file'
                    onChange={this.update('profile_picture')}/>

            <input type='submit' value='EDIT PROFILE'/>
          </form>
        </main>);
    }
  }
}
