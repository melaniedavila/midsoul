import React from 'react';
import RouteIndexItem from './route_index_item';
import LoadingIcon from '../../loading/loading_icon';

class RoutesIndex extends Component {
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
      return (
      <section className="routes-index">
        <ul>
          {routes.map(route => <RouteIndexItem key={route.id} route={route} />)}
        </ul>
      </section> );
    }
  }
}

export default PokemonIndex;
