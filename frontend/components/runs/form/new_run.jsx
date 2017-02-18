import React from 'react';

export default class NewRun extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {  title: '',
                    date: '',
                    description: '',
                    duration: '' };
  }


 // how to account for date and integer types????
  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createRun(this.state);
  }

  errors() {
    if (this.props.errors.length > 0) {
      return (
        this.props.errors.map(error, idx => {
          return (<li className="error" key={idx}>{error}</li>);
        })
      );
    }
  }

  render() {
    return (
      <div>
        <h3>LOG A RUN</h3>
        {this.errors()}
        <form onSubmit={this.handleSubmit}>
          <h4>Run Details: </h4>
          <br/>

          <label>Title:
            <input
              type="text"
              value={this.state.title}
              onChange={this.update('title')} />
          </label>
          <br/>


          <label>Description:
            <textarea
              value={this.state.description}
              onChange={this.update('description')} />
          </label>
          <br/>

          <input type="submit" value='SAVE ROUTE' />
        </form>
      </div>
    )
  }
}
