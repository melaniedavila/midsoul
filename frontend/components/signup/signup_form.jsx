import React from 'react';
import { Link } from 'react-router';

export default class SignUpForm extends Component {
  constructor(props){
    super(props);
    this.state = { email: '', f_name:'', l_name:'', password: '' };
    this.handleSubmit.bind(this);
  }

  update(field){
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.signup(this.state)
  }

  componentDidMount(){
    this.props.clearErrors();
  }

  render(){
    return(
      <section>
        <h4>Create a Midsoul account</h4>

        <h6>Already have an account? </h6><Link to='/login'>Login</Link>
      </section>
    );
  }

}
