import React from 'react';
import { Link } from 'react-router';
import ErrorsList from '../errors/errors_list';


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
        <h4>Create a midSoul account</h4>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <ErrorsList errors={ errors.base } />
            <input type='text'
                    value={this.state.f_name}
                    placeholder={'First Name'}
                    onChange={this.update('f_name')}/>
                  <ErrorsList errors={ errors.f_name } />
          <br />

            <input type='text'
                    value={this.state.l_name}
                    placeholder={'Last Name'}
                    onChange={this.update('l_name')}/>
                  <ErrorsList errors={ errors.l_name } />
          <br />

            <input type='text'
              value={this.state.email}
              placeholder={'Email'}
              onChange={this.update('email')}/>
              <ErrorsList errors={ errors.email } />
          <br />

            <input type='password'
              placeholder={'Password'}
              onChange={this.update('password')}/>
            <ErrorsList errors={ errors.password } />
          <br />
          
          <input type='submit' value='SIGN UP'/>
        </form>
        <h6>Already have an account? </h6><Link to='/login'>Login</Link>
      </section>
    );
  }
}
