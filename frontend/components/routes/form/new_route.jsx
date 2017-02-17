import React from 'react';

// If editing map, center based on old map coords instead
const createMapCenteredOnUserLocation = function () {
  let center;
  const zoom = 9;

  if (GBrowserIsCompatible())
  {
    const map = new google.maps.Map2(document.getElementById("map"));

    if (google.loader.ClientLocation){
        center = new google.maps.LatLng(
        google.loader.ClientLocation.latitude,
        google.loader.ClientLocation.longitude
      );
    }
  }

  map.setCenter(center, zoom);
}


export default class NewRoute extends React.Component {
  constructor(props) {
    debugger
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {  title: '',
                    description: '',
                    path: '' };
  }

  componentDidMount() {
    this.props.clearErrors();

    createMapCenteredOnUserLocation();
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.route);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }


  errors() {
    debugger
    if (this.props.errors.length > 0) {
      return (
        this.props.errors.map(error, idx => {
          debugger
          return (<li className="error" key={idx}>{error}</li>);
        })
      );
    }
  }


  render () {
    debugger
    const formHeader = "CREATE A ROUTE"
    debugger
    return (
      <div>
        <h3>{formHeader}</h3>
        {this.errors()}
        <form onSubmit={this.handleSubmit}>
          <label>Title
            <input
              type="text"
              value={this.state.title}
              onChange={this.update('title')} />
          </label>

          <label>Description
            <textarea
              value={this.state.description}
              onChange={this.update('description')} />
          </label>

          <label>Path
            <div id='map'>
                {/*render map here*/}
            </div>


            <textarea
              value={this.state.path}
              onChange={this.update('path')} />
          </label>

          <input type="submit" value={formHeader} />
        </form>
      </div>
    );
  }
}
