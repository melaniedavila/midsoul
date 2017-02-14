import React from 'react';
import { Link } from 'react-router';
import ErrorsList from '../errors/errors_list';

export default class LogInForm extends Component {
  constructor(props){
    super(props);
    this.state = { email: '', password: '' };
    this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.clearErrors();
  }


  update(field){
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.login(this.state).then(() => this.props.router.push('/');
  }

  render(){
    return(
      <section>
        <h4>Log in</h4>
        <form>
          <label>Email:
            <input type='text'
              value={this.state.email}
              onChange={this.update('email')}/>
          </label>
          <br />
          <label>password:
            <input type='password'
              onChange={this.update('password')}/>
          </label>
          <br />
          <input type='submit' value='LOG IN'/>
        </form>
        <h6>New to midSoul? </h6><Link to='/signup'>Join Now</Link>
      </section>
    );
  }
}
