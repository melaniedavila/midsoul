import React from 'react';
import RouteIndexItem from './route_index_item';
import LoadingIcon from '../../loading/loading_icon';

class RoutesIndex extends Component {
  componentDidMount() {
    this.props.requestAllRoutes();
  }

  render() {
    // confirm children below????
    const { routes, loading, children } = this.props;
    if (loading) {
      return <LoadingIcon />;
    } else {
      return (
      <section className="routes-index">
        <ul>
          {routes.map(route => <RouteIndexItem key={route.id} route={route} />)}
        </ul>
        {children}
      </section> );
    }
  }
}

export default PokemonIndex;
