import React from 'react';

// const createMapCenteredOnUserLocation = function () {
//   let center;
//   const zoom = 9;

  // if (GBrowserIsCompatible())
  // {
    // const map = new google.maps.Map2(document.getElementById("map"));
  //
  //   if (google.loader.ClientLocation){
  //       center = new google.maps.LatLng(
  //       google.loader.ClientLocation.latitude,
  //       google.loader.ClientLocation.longitude
  //     );
  //   }
  // }
//   const map = new google.maps.Map2(document.getElementById("map"));
//
//
//   map.setCenter({lat: 37.773972, lng: -122.431297}, zoom);
// }


// let _mapOptions = {
//   center: {lat: 37.773972, lng: -122.431297}, // San Francisco coords
//   zoom: 13
// };

const _defaultMapOptions = {
  center: {lat: 40.7128, lng: -74.0059 },
  zoom: 12
}

const _customMapOptions = function (pos) {
  return ({
    center: { lat: pos.coords.latitude, lng: pos.coords.longitude },
    zoom: 12
  });
}


export default class NewRoute extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.initializeMap = this.initializeMap.bind(this);
    this.initializeCustomMap = this.initializeCustomMap.bind(this);
    this.initializeDefaultMap = this.initializeDefaultMap.bind(this);
    this.state = {  title: '',
                    description: '',
                    path: '' };
  }

  componentDidMount() {
    this.props.clearErrors();
    this.mapNode = this.refs.map;
    this.map = this.initializeMap();
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.route);
  }

  initializeMap () {
    if (navigator.geolocation) {
      return this.initializeCustomMap();
    } else {
      return this.initializeDefaultMap();
    }
  }

  initializeCustomMap() {
    const form = this;
    return (navigator.geolocation.getCurrentPosition(
      (pos) => (new google.maps.Map(this.mapNode, _customMapOptions(pos)))
    ));
  }

  initializeDefaultMap() {
    return new google.maps.Map(this.mapNode, _defaultMapOptions);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    // update path based on markers
    this.props.action(this.state);
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
        <h3>CREATE A ROUTE</h3>
        {this.errors()}
        <form onSubmit={this.handleSubmit}>
          <h4>Route Details: </h4>
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

          <div className="map" ref="map">Map</div>
          <br/>

          <input type="submit" value='SAVE ROUTE' />
        </form>
      </div>
    )
  }
}
