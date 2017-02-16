import React from 'react';
import { Link } from 'react-router';
import ErrorsList from '../errors/errors_list';
import SplashVideo from '../splash/SplashVideo';

export default class SignUpForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { email: '', f_name:'', l_name:'', password: '' };
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
        <div className='signup-form-container'>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <br />
            <h4>Create a midSoul account</h4>
            <br />

            <div className='errors-list'>
              <ErrorsList errors={ errors.base } />
              <ErrorsList errors={ errors.f_name } />
              <ErrorsList errors={ errors.l_name } />
              <ErrorsList errors={ errors.email } />
              <ErrorsList errors={ errors.password } />
            </div>

            <br />

            <input type='text'
              value={this.state.f_name}
              placeholder={'First Name'}
              onChange={this.update('f_name')}/>
            <br />

            <input type='text'
              value={this.state.l_name}
              placeholder={'Last Name'}
              onChange={this.update('l_name')}/>
            <br />

            <input type='text'
              value={this.state.email}
              placeholder={'Email'}
              onChange={this.update('email')}/>
            <br />

            <input type='password'
              placeholder={'Password'}
              onChange={this.update('password')}/>
            <br />

            <input type='submit' value='JOIN NOW'/>
            <h6>Already have an account?  <Link to='/login'>Log In</Link></h6>
          </form>
        </div>
        <div className='splash-video'>
          <SplashVideo />
        </div>
      </section>
    );
  }
}
