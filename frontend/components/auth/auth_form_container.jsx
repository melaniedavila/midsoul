// import { connect } from 'react-redux';
// import AuthForm from './auth_form';
// import { logout, login, signup } from '../../actions/session_actions';
//
// const mapStateToProps = function (state, ownProps) {
//   const loggedIn = Boolean(state.session.currentUser);
//   const errors = state.session.errors;
//   const formType = ownProps.location.pathname.slice(1) === 'login' ? 'login' : 'signup';
//
//   return ({
//     loggedIn: loggedIn,
//     errors: errors,
//     formType: formType
//   });
// };
//
// const mapDispatchToProps = function (dispatch, ownProps) {
//   const formType = ownProps.location.pathname.slice(1) === 'login' ? 'login' : 'signup';
//   const processForm = formType === 'login' ? login : signup;
//   return ({ processForm: (user) => dispatch(processForm(user)) });
// };
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AuthForm);


import React, { Component } from 'react';
import Spinner from './spinner';
import ErrorsList from './error_list';
import { withRouter } from 'react-router';

class AuthForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .submitForm(Object.assign({}, this.state))
      .then(() => this.props.router.push('/'));
  }

  render() {
    const { errors } = this.props;
    return (
      <form onSubmit={ this.handleSubmit }>
        <ErrorList errors={ errors.base } />

        <label htmlFor="username">Username</label>
        <input
          type="text"
          onChange={ this.update("username")}
          value={ this.state.username }
          />
        <ErrorList errors={ errors.username } />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          onChange={ this.update("password")}
          value={ this.state.password}
          />
        <ErrorList errors={ errors.password } />

        <button>{ this.props.submitText }</button>
      </form>
    );
  }

}

export default withRouter(AuthForm)
