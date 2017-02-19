import React from 'react';

const _numericFields = [
  'route_id', 'durationHours', 'durationMinutes', 'durationSeconds'
]

export default class NewRun extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      title: '',
      date: '',
      description: '',
      durationHours: 0,
      durationMinutes: 0,
      durationSeconds: 0,
      route_id: 0,
      route: null,
    };
  }

  componentDidMount(){
    this.props.requestAllRoutes();
  }

 // how to account for date and integer types????
  update(field) {
    return function (e) {
      const fieldVal = this.numericField(field) ? parseInt(e.currentTarget.value) : e.currentTarget.value;
      const newState = { [field]: fieldVal }

      if (field === 'route_id') {
        newState['route'] = this.props.routes.find(route => route.id === fieldVal)
      }

      this.setState(newState);
    }.bind(this);
  }

  errors() {
    if (this.props.errors.length > 0) {
      const errorListItems = this.props.errors.map((error, idx) => {
          return (<li className="error" key={idx}>{error}</li>);
        });

      return (<ul>{ errorListItems }</ul>);
    }
  }

  numericField(field) {
    return _numericFields.includes(field);
  }

  durationInSeconds() {
    return (this.state.durationSeconds +
      (this.state.durationMinutes * 60) +
        (this.state.durationHours * 3600));
  }

  handleSubmit(e) {
    e.preventDefault();
    const title = this.state.title;
    const date = this.state.date;
    const description = this.state.description;
    const route_id = this.state.route_id;
    const duration = this.durationInSeconds();
    this.props.createRun({ title, date, description, route_id, duration });
  }

  maxRunDate() {
    const today = new Date();
  // Set month and day to string to add leading 0
    let day = new String(today.getDate());
    let month = new String(today.getMonth()+1); //January is 0!
    const yr = today.getFullYear();

    if(day.length < 2) { day = "0" + day; }
    if(month.length < 2) { month = "0" + month; }

    return new String( yr + '-' + month + '-' + day );
  }

  render() {
    var mapImg;

    if (this.state.route) {
      mapImg = (<img src={`https://maps.googleapis.com/maps/api/staticmap?size=300x150&path=color:0x0c5d94%7Cenc:${this.state.route.polyline}&key=${window.googleMapsApiKey}`}
            alt={this.state.route.title}></img>)
    }

    return (
      <div>
        <h3>LOG A RUN</h3>
          <ul className='errors-list'>
            {this.errors()}
          </ul>
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
              type="date"
              max={this.maxRunDate()}
              value={this.state.date}
              onChange={this.update('date')} />
          </label>
          <br/>

          <label>Duration:
            <input
              type="number"
              value={this.state.durationHours}
              min={0}
              onChange={this.update('durationHours')} />
            <input
              type="number"
              value={this.state.durationMinutes}
              max={59}
              min={0}
              onChange={this.update('durationMinutes')} />
            <input
              type="number"
              value={this.state.durationSeconds}
              max={59}
              min={0}
              onChange={this.update('durationSeconds')} />
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
              onChange={this.update('route_id')}>
              <option disabled selected>Select Route</option>
              {this.props.routes.map((route) => {
                return (
                  <option
                    key={route.id}
                    value={route.id}>{route.title}
                  </option>
                );
              })}
            </select>
          </label>

          {/*<label>Route:
            <select
              value={this.state.route_id}
              onChange={this.update('route_id')}
              defaultValue="Select Route">
              {ROUTES.map((route, i) => {
                return <option value={route} key={route.id}>{route}</option>;
              })}
            </select>
          </label>*/}
          <br/>
          <input type="submit" value='SAVE ROUTE' />
        </form>
        {mapImg}
      </div>
    )
  }
}
