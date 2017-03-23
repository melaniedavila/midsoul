import React from 'react';
import RunIndexItem from './run_index_item';
import LoadingIcon from '../../loading/loading_icon';

export default class RunIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllRuns();
  }

  render() {
    const { runs, loading } = this.props;
    runs.sort((runA, runB) => runA.date < runB.date);
    
    if (loading) {
      return <LoadingIcon />;
    } else {
      return (
      <section className="runs-index">
        <h2>My Runs</h2>
        <ul className='mini-runs'>
          {runs.map(run => <RunIndexItem key={run.id} run={run} />)}
        </ul>
      </section> );
    }
  }
}
