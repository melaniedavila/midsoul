import React from 'react';
import { Link } from 'react-router';
import ErrorsList from '../errors/errors_list';


export default class SignUpForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { email: '', f_name:'', l_name:'', password: '' };
    // this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.clearErrors();
  }


  update(field){
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.signup(this.state).then(() => this.props.router.push('/'));
  }

  render(){
    const errors = this.props.errors;

    return(
      <section>
        <h4>Create a midSoul account</h4>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <ErrorsList errors={ errors.base } />
          <label>First Name:
            <input type='text'
                    value={this.state.f_name}
                    onChange={this.update('f_name')}/>
                  <ErrorsList errors={ errors.f_name } />
          </label>
          <br />
          <label>Last Name:
            <input type='text'
                    value={this.state.l_name}
                    onChange={this.update('l_name')}/>
                  <ErrorsList errors={ errors.l_name } />
          </label>
          <br />
          <label>Email:
            <input type='text'
              value={this.state.email}
              onChange={this.update('email')}/>
              <ErrorsList errors={ errors.email } />

          </label>
          <br />
          <label>Password:
            <input type='password'
              onChange={this.update('password')}/>
            <ErrorsList errors={ errors.password } />
          </label>
          <br />
          <input type='submit' value='SIGN UP'/>
        </form>
        <h6>Already have an account? </h6><Link to='/login'>Login</Link>
      </section>
    );
  }
}
