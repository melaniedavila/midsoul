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

    if (!route) {
      return <LoadingIcon />;
    } else{
      return (
        <div>
          <h3>{route.title}</h3>
          <p>{route.description}</p>
          <Link to="/routes">Back to Routes</Link>
        </div>
      );
    }
  }
}
