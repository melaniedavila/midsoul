import React from 'react';
import { Link, hashHistory } from 'react-router';
import ErrorsList from '../../errors/errors_list';
import LoadingIcon from '../../loading/loading_icon';

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
    const { requestSingleUser } = this.props;

    if (this.props.params.userId !== nextProps.params.userId) {
      requestSingleUser(nextProps.params.userId);
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
    const { updateUser } = this.props;
    updateUser(this.state);
  }

  errors() {
    const { errors } = this.props;

    if (errors.length > 0) {
      const errorListItems = errors.map((error, idx) => {
          return (<li className="error" key={idx}>{error}</li>);
        });

      return (<ul>{ errorListItems }</ul>);
    }
  }

  render () {
    const { user, errors } = this.props;

    if (!user) {
      return <LoadingIcon />;

    } else {
      return (
        <main className='edit-profile-main'>
          <h3 className='edit-profile-header'>Edit Profile</h3>
          <img src={user.profile_picture}
                alt='Profile picture'></img>

          <div className='edit-form-and-link'>
            <form onSubmit={this.handleSubmit}>
              <div className='errors-list'>
                { this.errors() }
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

              <input type='submit' value='Edit Profile'/>
              <Link to={`/users/${user.id}`}>Back to Profile</Link>
            </form>
          </div>
        </main>);
    }
  }
}
