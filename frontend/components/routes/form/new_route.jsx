import React from 'react';

const _defaultMapOptions = {
  center: {lat: 40.7128, lng: -74.0059 },
  zoom: 12
};

const _resetMapOptions = function (pos) {
  return ({
      center: { lat: pos.lat(), lng: pos.lng() },
      zoom: 14
    });
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
};

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

  resetMap() {
    const oldOriginPos = this.originMarker.position;
    this.originMarker = null;
    this.map = this.initializeResetMap(oldOriginPos);
    this.directionsRenderer =
      new google.maps.DirectionsRenderer(_directionsRendererOptions);
    this.directionsRenderer.setMap(this.map);
    this.registerListeners();
    this.setState({
      title: '',
      description: '',
      routePath: [],
      distanceInMiles: 0,
      elevation_gain: 0
    });
  }

  componentDidMount() {
    this.props.clearErrors();
    // React's ref attribute allows us to integrate with Google Maps
    this.mapNode = this.refs.map;
    this.map = this.initializeMap();
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer =
      new google.maps.DirectionsRenderer(_directionsRendererOptions);

    // The below binds the renderer to the map passed in as an argument
    this.directionsRenderer.setMap(this.map);
    this.elevationService = new google.maps.ElevationService();
    this.registerListeners();
  }

  initializeMap () {
    return this.initializeDefaultMap();
  }

  initializeCustomMap() {
    return (navigator.geolocation.getCurrentPosition(
      (pos) => (new google.maps.Map(this.mapNode, _customMapOptions(pos)))
    ));
  }

  initializeDefaultMap() {
    return new google.maps.Map(this.mapNode, _defaultMapOptions);
  }

  initializeResetMap(pos) {
    return new google.maps.Map(this.mapNode, _resetMapOptions(pos));
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    // Update path based on markers
    this.props.createRoute(this.newRouteParams());
  }

  newRouteParams() {
    const directions = this.directionsRenderer.getDirections();
    var polyline, distance;
    if (directions) {
      polyline = directions.routes[0].overview_polyline;
      // In meters:
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
          if (error.includes('Polyline')) {
            return (<li className="error" key={idx}>{error.substr(9)}</li>);
          }
          return (<li className="error" key={idx}>{error}</li>);
        });

      return (<ul>{ errorListItems }</ul>);
    }
  }

  registerListeners() {
    this.map.addListener('click', this.handleClickOnMap.bind(this));

    // Draggable directions are modified and rendered client-side. The
    // event listener below allows us to execute a callback when the user
    // has modified the displayed directions.
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
      // Add marker to map if it's the first point, i.e. the origin
      this.originMarker = marker;
      this.originMarker.setMap(this.map);
    } else if (this.state.routePath.length === 1) {
      // Clears extra marker near start
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

    // The origin must be included in the waypoints. Otherwise, the
    // rendered route path's destination marker changes with every click
    // and we are unable to curate custom paths with multiple waypoints.
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
    // The directionsRenderer is an MVCObject (base class implementing
    // KVO). Therefore, it will detect any changes to its properties and
    // automatically update the map if any of its properties are changed.
    // We registered a 'directions_changed' listener in order to update
    // route details (distance and elevation gain) in real time (and not
    // necessarily to re-render the map with the new path since that is
    // automatically done for us).
    this.directionsRenderer.setDirections(response);
  }

  removeLastRoutePathPoint(e) {
    e.preventDefault();

    if (this.state.routePath.length > 1) {
      this.setState({
        routePath: this.state.routePath.slice(0, -1)
      }, this.requestDirections.bind(this));
    } else {
      this.setState({
        routePath: []
      }, this.resetMap.bind(this));
    }
  }

  render() {
    return (
      <main>
        <div className='map-flex-container'>
          <div className='map-flex-left'>
            <form onSubmit={this.handleSubmit}>
              <div className='route-details'>
                <h3>Route Details</h3>
                  <div className='route-distance-flex-container'>
                    <p className='distance-tag'>Distance:</p>
                    <p className='distance-measurement'>{(this.state.distanceInMiles).toFixed(2)}</p>
                    <p className='distance-unit'>miles</p>
                  </div>

                  <div className='route-elevation-gain-flex-container'>
                    <p className='elevation-gain-tag'>Elevation Gain:</p>
                    <p className='elevation-gain-measurement'>{this.state.elevation_gain.toFixed(2)}</p>
                    <p className='elevation-gain-unit'>meters</p>
                  </div>
              </div>

              <div className='map-form-fields'>
                <div className='errors-list'>
                  {this.errors()}
                </div>
                <h3>Create a Route</h3>

                <label>Title:</label>
                  <input
                    type="text"
                    value={this.state.title}
                    onChange={this.update('title')} />
                  <label>Description:</label>
                  <textarea
                    value={this.state.description}
                    onChange={this.update('description')} />
                  <input type="submit" value='Save Route' />
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
