import React from 'react';
import { Link } from 'react-router';
import ErrorsList from '../errors/errors_list';
import FeatureFooter from '../footer/feature_footer';
import SplashVideo from '../splash/splashVideo';

export default class SignUpForm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    const { router, signUp } = this.props;
    signUp(this.state).then(() => router.push('/'));
  }

  render(){
    const { errors } = this.props;
    let errorsList;
    if (errors) {
      errorsList = <div className='errors-list'>
                    <ErrorsList errors={errors.base} />
                  </div>;
    }

    return(
      <section>
        <div className='signup-form-container'>
          <form onSubmit={this.handleSubmit}>
            <h4>Create a midSoul account</h4>
            { errorsList }
            <input type='text'
              value={this.state.f_name}
              placeholder={'First Name'}
              onChange={this.update('f_name')}/>

            <input type='text'
              value={this.state.l_name}
              placeholder={'Last Name'}
              onChange={this.update('l_name')}/>

            <input type='text'
              value={this.state.email}
              placeholder={'Email'}
              onChange={this.update('email')}/>

            <input type='password'
              placeholder={'Password'}
              onChange={this.update('password')}/>

            <input type='submit' value='Join Now'/>
            <h6>Already have an account?  <Link to='/login'>Log In
                                          </Link></h6>
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
