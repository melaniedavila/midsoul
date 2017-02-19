import React from 'react';
import { Link } from 'react-router';
import LoadingIcon from '../../loading/loading_icon';

export default class RouteShow extends React.Component {
  componentDidMount() {
    this.props.requestSingleRoute(this.props.params.routeId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.routeId !== nextProps.params.routeId) {
      this.props.requestSingleRoute(nextProps.params.routeId);
    }
  }

  render () {
    const route = this.props.route;
    debugger
    if (!route) {
      return <LoadingIcon />;
    } else{
      return (
        <div>
          <h3>{route.title}</h3>
          <p>{route.description}</p>
          <div className='route-map-img'>
            <img src={`https://maps.googleapis.com/maps/api/staticmap?size=300x150&path=color:0x0c5d94%7Cenc:${route.polyline}&key=${window.googleMapsApiKey}`}></img>
          </div>
          <Link to="/routes">Back to Routes</Link>
        </div>
      );
    }
  }
}
