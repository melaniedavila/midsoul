import { Link, hashHistory } from 'react-router';
import CommentIndex from '../../comments/index/comment_index';
import LoadingIcon from '../../loading/loading_icon';
import NewCommentContainer from '../../comments/form/new_comment_container';
import React from 'react';

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
    // in the route's encoded polyline. The fitBounds function sets the
    // map window to contain the given bounds.
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
    // routePath contains array of LatLng positions
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
    } else {
      const currentUser = this.props.currentUser;
      let deleteButton;
      if (currentUser && currentUser.id === route.creator_id && route.run_count === 0) {
        deleteButton = (<button
                        onClick={this.handleDeleteRouteClick()}>
                        DELETE ROUTE
                      </button>);
      }

      let routeComments;
      if (route.comments) {
        routeComments = (
                          <div className='route-show-comments'>
                              <CommentIndex comments={route.comments}/>
                          </div>
                      );

      }

      return (
        <div className='route-show-details'>
          <div className='route-icon-and-title'>
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <h3>{route.title}</h3>
          </div>
          <div className='route-show-stats-and-description-container'>
            <div className='route-show-stats-container'>
              <div className='route-distance-flex-container'>
                <p className='distance-tag'>Distance:</p>
                <p className='distance-measurement'>{(route.distance).toFixed(2)}</p>
                <p className='distance-unit'>miles</p>
              </div>

              <div className='route-elevation-gain-flex-container'>
                <p className='elevation-gain-tag'>Elevation Gain:</p>
                <p className='elevation-gain-measurement'>{route.elevation_gain.toFixed(2)}</p>
                <p className='elevation-gain-unit'>meters</p>
              </div>
            </div>

            <div className='route-show-description'>
              <p className='description-tag'>Description:</p>
              <p className='description-content'>{route.description}</p>
            </div>
          </div>

          <div className='route-show-links'>
            <Link to='/routes'>Back to Routes</Link>
            {deleteButton}
          </div>

          <div className='route-show-flex-container'>
            <div className='interactive-route-show-map'>
              <div className="map" ref="map">Map</div>
            </div>
            <div className='route-comment-index-and-form'>
              <h2>Comments</h2>
              {routeComments}
              <div className='route-show-new-comment-form'>
                <NewCommentContainer activityType={'Route'} activityId={route.id}/>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
