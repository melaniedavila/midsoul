import React from 'react';
import RunIndexItem from './run_index_item';
import LoadingIcon from '../../loading/loading_icon';

export default class RunIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllRuns();
  }

  render() {
    const { runs, loading } = this.props;
    if (loading) {
      return <LoadingIcon />;
    } else {
      return (
      <section className="runs-index">
        <ul>
          {runs.map(run => <RunIndexItem key={run.id} run={run} />)}
        </ul>
      </section> );
    }
  }
}