import { Link, hashHistory } from 'react-router';
import ErrorsList from '../../errors/errors_list';
import LoadingIcon from '../../loading/loading_icon';
import React from 'react';

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

    this.state = nextProps.user;
  }

  update(field) {
    return (e) => {
      if (field === 'profile_picture') {
        var reader = new FileReader();
        var file = e.currentTarget.files[0];

        reader.onloadend = function () {
          this.setState({
            ['profile_picture']: file,
          });
        }.bind(this);

        reader.readAsDataURL(file);
      } else {
        this.setState({[field]: e.target.value});
      }
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

  render () {
    const user = this.props.user;
    const errors = this.props.errors;
    if (!user) {
      return <LoadingIcon />;

    } else {
      return (
        <main className='edit-profile-main'>
          <h3 className='edit-profile-header'>EDIT PROFILE</h3>
          <img src={user.profile_picture}
                alt='Profile picture'></img>

          <div className='edit-form-and-link'>
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
              <input
                type='file'
                onChange={this.update('profile_picture')}/>

              <input type='submit' value='EDIT PROFILE'/>
              <Link to={`/users/${user.id}`}>Back to Profile</Link>
            </form>
          </div>
        </main>);
    }
  }
}
