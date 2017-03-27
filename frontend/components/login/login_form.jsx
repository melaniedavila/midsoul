import React from 'react';
import { Link, hashHistory } from 'react-router';
import ErrorsList from '../errors/errors_list';
import FeatureFooter from '../footer/feature_footer';
import SplashVideo from '../splash/splashVideo';

export default class LogInForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { email: '', password: '' };
  }

  componentDidMount(){
    this.props.clearErrors();
  }

  update(field){
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.login(this.state).then(() => this.props.router.push('/feed'));
  }

  render(){
    const errors = this.props.errors;
    return(
      <section>
        <div className='login-form-container'>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <h4>Log In</h4>

            <div className='errors-list'>
              <ErrorsList  errors={ errors.base } />
            </div>

            <input type='text'
              value={this.state.email}
              placeholder={'Email'}
              onChange={this.update('email')}/>

            <input  type='password'
              placeholder={'Password'}
              onChange={this.update('password')}/>

            <input type='submit' value='LOG IN'/>
            <h6>New to midSoul?  <Link to='/signup'>Join Now</Link></h6>
          </form>
        </div>
        <div className='splash-video'>
          <SplashVideo />
        </div>
        <div className='feature-footer-component-container'>
          <FeatureFooter />
        </div>
      </section>
    );
  }
}
