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

    } else {
      center = {lat: 40.7128, long: 74.0059 };
    }
  }

  map.setCenter(center, zoom);
}


export default class RouteForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.route;
  }

  componentDidMount() {
    this.props.clearErrors();

    if (this.props.params) {
      this.props.requestSingleRoute(this.props.params.routeId);
      // should center map based on old map coords
    } else {
      createMapCenteredOnUserLocation();
    }
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
    if (this.props.errors) {
      return (
        this.props.errors.map(error, idx => {
          return (<li className="error" key={idx}>{error}</li>);
        })
      );
    }
  }


  render () {
    const formHeader = this.props.formType === 'new' ? "CREATE A ROUTE" : "UPDATE ROUTE";
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
