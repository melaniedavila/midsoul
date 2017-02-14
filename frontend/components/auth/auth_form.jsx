import React from 'react';
import { Link } from 'react-router';


export default class AuthForm extends React.Component {
  constructor(props){
    super(props);
    if (props.formType === 'login') {
      this.state = { email: '', password: '' };
    } else {
      this.state = { f_name: '', l_name: ''}
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    // debugger
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.router.push('/'));
  }

  // clearErrors(){
  //
  // }

  componentWillReceiveProps(nextProps){
    if (nextProps.formType !== this.props.formType) {
      this.setState({ username: '', password: '' });
      // this.clearErrors();
    }
  }

  update(field){
    let form = this;
    return function (e) {
      // e.preventDefault();
      form.setState({[field]: e.target.value});
    };
  }

  render() {
    const header = this.props.formType === 'login' ? 'Log In' : 'Sign Up';
    const link = this.props.formType === 'login' ? 'signup' : 'login';
    const linkText = this.props.formType === 'login' ? 'Sign Up' : 'Log In';
    let errors = this.props.errors;
    let errorsList;
    if (errors.length > 0) {
      errorsList =  errors.map((error, idx) => (<li key={idx}>{error}</li>));
    }

    return (
      <div>
        <h1>{header}</h1>
        <Link to={`/${link}`}>{linkText}</Link>
        <br/>
        <ul>
          {errorsList}
        </ul>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <label> Username
            <input type='text' value={this.state.username} onChange={this.update('username')}/>
          </label>
          <label> Password
            <input type='password' value={this.state.password} onChange={this.update('password')}/>
          </label>
          <input type='submit' value={header}/>
        </form>
    </div>);
  }
}
