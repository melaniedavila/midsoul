import React from 'react';

export default class NewRun extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {  title: '',
                    date: '',
                    description: '',
                    duration: '',
                    route_id: 0};
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
          <br/>

          <label>Title:
            <input
              type="text"
              value={this.state.title}
              onChange={this.update('title')} />
          </label>
          <br/>

          <label>Date:
            <input
              type="text"
              value={this.state.date}
              onChange={this.update('date')} />
          </label>
          <br/>

          <label>Duration:
            <input
              type="text"
              value={this.state.date}
              onChange={this.update('date')} />
          </label>
          <br/>

          <label>Description:
            <textarea
              value={this.state.description}
              onChange={this.update('description')} />
          </label>
          <br/>

          <label>Route:
            <select
              value={this.state.route_id}
              onChange={this.update('route_id')}
              defaultValue="Select Route">
              {ROUTES.map((route, i) => {
                return <option value={route} key={route.id}>{route}</option>;
              })}
            </select>
          </label>
          <br/>
          <input type="submit" value='SAVE ROUTE' />
        </form>
      </div>
    )
  }
}
