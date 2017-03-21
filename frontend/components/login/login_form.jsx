import React from 'react';
import { Link, hashHistory } from 'react-router';
import ErrorsList from '../errors/errors_list';
import SplashVideo from '../splash/splashVideo';
import FeatureFooter from '../footer/feature_footer';

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
            <br/>
            <h4>LOG IN</h4>
            <br/>

            <div className='errors-list'>
              <ErrorsList  errors={ errors.base } />
            </div>

            <br/>

            <input type='text'
              value={this.state.email}
              placeholder={'Email'}
              onChange={this.update('email')}/>
            <br />

            <input  type='password'
              placeholder={'Password'}
              onChange={this.update('password')}/>
            <br />

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
