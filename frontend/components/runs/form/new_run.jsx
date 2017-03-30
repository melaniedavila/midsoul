import React from 'react';

const _numericFields = [
  'route_id', 'durationHours', 'durationMinutes', 'durationSeconds'
];

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
    this.props.clearErrors();
    this.props.requestAllRoutes();
  }

  update(field) {
    return function (e) {
      const fieldVal = this.numericField(field) ?
                parseInt(e.currentTarget.value) : e.currentTarget.value;
      const newState = { [field]: fieldVal };
      const { routes } = this.props;

      if (field === 'route_id') {
        newState['route'] = routes.find(route => route.id === fieldVal);
      }

      this.setState(newState);
    }.bind(this);
  }

  errors() {
    const { errors } = this.props;

    if (errors.length > 0) {
      const errorListItems = errors.map((error, idx) => {
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
    const { routes } = this.props;

    if (this.state.route) {
      mapImg = (<img src={`https://maps.googleapis.com/maps/api/staticmap?size=500x250&path=color:0x0c5d94%7Cenc:${this.state.route.polyline}&key=${window.googleMapsApiKey}`}
            alt={this.state.route.title}></img>);
    }

    return (
      <main className='log-run-main'>
        <h3>Log A Run</h3>
        <div className='new-run-flex-container'>
          <div className='new-run-flex-left'>
            <form onSubmit={this.handleSubmit}>

              <div className='errors-list'>
                { this.errors() }
              </div>

              <label>Title:</label>
                <input
                  type="text"
                  value={this.state.title}
                  onChange={this.update('title')} />

              <label>Date:</label>
                <input
                  type="date"
                  max={this.maxRunDate()}
                  value={this.state.date}
                  onChange={this.update('date')} />

                <label>Duration (HH/MM/SS):</label>
                <div className='run-duration-fields'>
                  <input
                    type="number"
                    value={this.state.durationHours}
                    min={0}
                    onChange={this.update('durationHours')} />hours
                  <input
                    className='duration-with-margin'
                    type="number"
                    value={this.state.durationMinutes}
                    max={59}
                    min={0}
                    onChange={this.update('durationMinutes')} />mins
                  <input
                    className='duration-with-margin'
                    type="number"
                    value={this.state.durationSeconds}
                    max={59}
                    min={0}
                    onChange={this.update('durationSeconds')} />secs
                </div>

              <label>Description:</label>
                <textarea
                  value={this.state.description}
                  onChange={this.update('description')} />

              <label>Route:</label>
                <select
                  onChange={this.update('route_id')}
                  defaultValue='Select Route'>
                  <option disabled>Select Route</option>
                  { routes.map((route) => {
                    return (
                      <option
                        key={route.id}
                        value={route.id}>{route.title}
                      </option>
                    );
                  }) }
                </select>
              <input type="submit" value='Save Run' />
            </form>
          </div>

          <div className='new-run-flex-right'>
            { mapImg }
          </div>

        </div>
      </main>
    );
  }
}
