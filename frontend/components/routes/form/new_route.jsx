import React from 'react';

const _defaultMapOptions = {
  center: {lat: 40.7128, lng: -74.0059 },
  zoom: 12
};

const _customMapOptions = function (pos) {
  return ({
    center: { lat: pos.coords.latitude, lng: pos.coords.longitude },
    zoom: 12
  });
};

const _directionsRendererOptions = {
  draggable: true,
  polylineOptions: {
    strokeWeight: 5,
    strokeColor: "#0c5d94"
  }
}

const milesPerMeter = 0.000621371;

export default class NewRoute extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.initializeMap = this.initializeMap.bind(this);
    this.initializeCustomMap = this.initializeCustomMap.bind(this);
    this.initializeDefaultMap = this.initializeDefaultMap.bind(this);
    this.originMarker = null;
    this.state = {
      title: '',
      description: '',
      routePath: [],
      distanceInMiles: 0,
      elevation_gain: 0
    };
  }

  componentDidMount() {
    this.props.clearErrors();
    this.mapNode = this.refs.map;
    this.map = this.initializeMap();
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer =
      new google.maps.DirectionsRenderer(_directionsRendererOptions);
    this.directionsRenderer.setMap(this.map);
    this.elevationService = new google.maps.ElevationService();
    this.registerListeners();
  }

  initializeMap () {
    return this.initializeDefaultMap();

    // TODO: make it work this way
    // if (navigator.geolocation) {
    //   return this.initializeCustomMap();
    // } else {
    //   return this.initializeDefaultMap();
    // }
  }

  initializeCustomMap() {
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
    this.props.createRoute(this.newRouteParams());
  }

  newRouteParams() {
    const directions = this.directionsRenderer.getDirections();
    var polyline, distance;
    if (directions) {
      polyline = directions.routes[0].overview_polyline;
      // in meters:
      distance = directions.routes[0].legs[0].distance.value;
    }

    return {
      title: this.state.title,
      description: this.state.description,
      polyline,
      distance: distance || this.state.distanceInMiles,
      elevation_gain: this.state.elevation_gain
    };
  }

  errors() {
    if (this.props.errors.length > 0) {
      const errorListItems = this.props.errors.map((error, idx) => {
          return (<li className="error" key={idx}>{error}</li>);
        });

      return (<ul>{ errorListItems }</ul>);
    }
  }

  registerListeners() {
    this.map.addListener('click', this.handleClickOnMap.bind(this));
    this.directionsRenderer.addListener(
      'directions_changed',
      this.handleDisplayRendererDirectionsChange.bind(this)
    );
  }

  handleClickOnMap(e) {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    const position = {lat, lng};
    const marker = new google.maps.Marker({position});

    if (this.originMarker === null) {
      // add marker to map if it's the first point, i.e. the origin
      this.originMarker = marker;
      this.originMarker.setMap(this.map);
    } else if (this.state.routePath.length === 1) {
      // clears extra marker near start
      this.originMarker.setMap(null);
    }

    this.setState({
      routePath: this.state.routePath.concat(marker.position)
    });

    if (this.state.routePath.length >= 2) {
      this.requestDirections();
    }
  }

  requestDirections() {
    const routePath = this.state.routePath;
    const origin = this.originMarker.position;
    const destination = routePath[routePath.length - 1];
    const waypoints = routePath
      .slice(0, routePath.length - 1)
      .map(routePathPoint => {
        return {
          location: routePathPoint,
          stopover: false
        };
      });

    const requestDetails = {
      origin,
      destination,
      waypoints,
      travelMode: google.maps.TravelMode.WALKING,
    };

    this.directionsService.route(
      requestDetails,
      this.handleDirectionsServiceResponse.bind(this)
    );
  }

  handleDirectionsServiceResponse(response, status) {
    if (status === 'OK') {
      this.displayDirections(response);
    } else {
      console.error(
        'status', status,
        'response', response
      );
    }
  }

  handleDisplayRendererDirectionsChange() {
    const directions = this.directionsRenderer.getDirections();
    const waypoints = directions.routes[0].legs[0].via_waypoints;
    const routePath = waypoints.concat(directions.routes[0].legs[0].end_location);
    const distanceInMeters = directions.routes[0].legs[0].distance.value;
    const distanceInMiles = distanceInMeters * milesPerMeter;

    this.setState({ routePath, distanceInMiles });

    this.elevationService.getElevationAlongPath({
      path: this.state.routePath,
      samples: this.state.routePath.length
    }, (response, status) => {
      const elevationValues = response.map(elevSamplePoint => {
        return elevSamplePoint.elevation;
      });

      const minElevation = Math.min(...elevationValues);
      const maxElevation = Math.max(...elevationValues);
      const elevation_gain = maxElevation - minElevation;
      this.setState({ elevation_gain });
    });
  }

  displayDirections(response) {
    this.directionsRenderer.setDirections(response);
  }

  removeLastRoutePathPoint(e) {
    e.preventDefault();

    this.setState({
      routePath: this.state.routePath.slice(0, -1)
    }, this.requestDirections.bind(this));
  }

  render() {
    return (
      <main>
        <div className='map-flex-container'>
          <div className='map-flex-left'>
            <form onSubmit={this.handleSubmit}>
              <div className='route-details'>
                <h3>ROUTE DETAILS </h3>
                <h5>Distance: {`${this.state.distanceInMiles.toFixed(2)} miles`}</h5>
                <h5>Elevation Gain: {`${this.state.elevation_gain.toFixed(2)} meters`}</h5>
              </div>

              <div className='map-form-fields'>
                <div className='errors-list'>
                  {this.errors()}
                </div>
                <h3>CREATE A ROUTE</h3>

                <label>Title:</label>
                  <input
                    type="text"
                    value={this.state.title}
                    onChange={this.update('title')} />
                  <label>Description:</label>
                  <textarea
                    value={this.state.description}
                    onChange={this.update('description')} />
                <input type="submit" value='SAVE ROUTE' />
              </div>
            </form>
          </div>

          <div className='map-flex-right'>
            <p>
              Click on the map to create a route. You may also drag the route path
              to modify your route.
            </p>
            <div className='interactive-map'>
              <button onClick={this.removeLastRoutePathPoint.bind(this)}>Undo Last Click</button>
              <div className="map" ref="map">Map</div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
