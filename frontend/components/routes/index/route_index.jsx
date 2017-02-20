import React from 'react';
import RouteIndexItem from './route_index_item';
import LoadingIcon from '../../loading/loading_icon';

export default class RouteIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllRoutes();
  }

  render() {
    // need children below???? only need it if we want
    // both RouteIndexContainer and RouteShowContainer to
    // be rendred at same time
    const { routes, loading } = this.props;
    if (loading) {
      return <LoadingIcon />;
    } else {
      console.log('routes', routes);
      return (
        <section className="routes-index">
          <h2>Routes</h2>
          <ul className='mini-routes'>
            {routes.map(route => <RouteIndexItem key={route.id} route={route} />)}
          </ul>
        </section>
      );
    }
  }
}
