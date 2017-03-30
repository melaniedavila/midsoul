import React from 'react';
import RouteIndexItem from './route_index_item';
import LoadingIcon from '../../loading/loading_icon';

export default class RouteIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllRoutes();
  }

  render() {
    const { routes, loading } = this.props;
    routes.sort((routeA, routeB) => {
      return new Date(routeB.created_at) - new Date(routeA.created_at);
    });

    if (loading) {
      return <LoadingIcon />;
    } else {
      return (
        <section className="routes-index">
          <h2>Routes</h2>
          <ul className='mini-routes'>
            {routes.map(route => <RouteIndexItem  key={route.id}
                                                  route={route} />)}
          </ul>
        </section>
      );
    }
  }
}
