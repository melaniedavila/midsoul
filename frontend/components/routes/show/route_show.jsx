import React from 'react';
import { Link, hashHistory } from 'react-router';
import LoadingIcon from '../../loading/loading_icon';

const _mapOptions = {
  center: { lat: 0, lng: 0 },
  zoom: 12
};

export default class RouteShow extends React.Component {
  componentDidMount() {
    this.props.requestSingleRoute(this.props.params.routeId).then(() => {
      this.generateMapFromPolyline();
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.routeId !== nextProps.params.routeId) {
      this.props.requestSingleRoute(nextProps.params.routeId);
    }
  }

  redirectTo(url) {
    return function (e) {
      e.preventDefault();
      hashHistory.push(url);
    };
  }

  generateMapFromPolyline(){
    this.mapNode = this.refs.map;
    this.map = new google.maps.Map(this.mapNode, _mapOptions);

    const routePath = this.generateRoutePathFromPolyline();
    const bounds = this.generateMapBoundsFromRoutePath(routePath);

    // Bounds will ensure map actually orients itself over path stored
    // in the route's encoded polyline
    this.map.fitBounds(bounds);
    routePath.setMap(this.map);
  }

  generateRoutePathFromPolyline() {
    const polyline = this.props.route.polyline;
    const latLngPositions = google.maps.geometry.encoding.decodePath(polyline);
    // Below consists of an array of LatLng locations, and creates a series
    // of line segments that connect those locations in an ordered sequence.
    return new google.maps.Polyline({
      path: latLngPositions,
      strokeWeight: 5,
      strokeColor: "#0c5d94"
    });
  }

  generateMapBoundsFromRoutePath(routePath) {
    let bounds = new google.maps.LatLngBounds();
    // contains array of LatLng positions
    const path = routePath.getPath();
    for (let i = 0; i < path.length; i++) {
      // b is a property of path that is the actual array of LatLng positions
      // mentionded above
       bounds.extend(path.b[i]);
    }

    return bounds;
  }

  handleDeleteRouteClick(e){
    return (e) => {
      e.preventDefault();
      this.props.deleteRoute(this.props.route.id)
        .then(() => (hashHistory.push('/routes')));
    };
  }

  render () {
    const route = this.props.route;
    if (!route) {
      return <LoadingIcon />;
    } else{
      let deleteButton;
      if (this.props.currentUser.id === route.creator_id) {
        deleteButton = (<button
                        onClick={this.handleDeleteRouteClick()}>
                        DELETE ROUTE
                      </button>);
      }

      return (
        <div className='route-show-details'>
          <h3>{route.title}</h3>
          <p>Distance: {(route.distance).toFixed(2)} miles</p>
          <p>Elevation Gain: {route.elevation_gain.toFixed(2)} meters</p>

          <p>{route.description}</p>
          <div className='route-show-links'>
            <Link to='/routes'>Back to Routes</Link>
            {deleteButton}
          </div>
          <div className='route-show-flex-container'>
            <div className='interactive-route-show-map'>
              <div className="map" ref="map">Map</div>
            </div>
          </div>
        </div>
      );
    }
  }
}
