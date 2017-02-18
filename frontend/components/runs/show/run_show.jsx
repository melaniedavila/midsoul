import React from 'react';
import { Link } from 'react-router';
import LoadingIcon from '../../loading/loading_icon';
import ErrorsList from '../../errors/errors_list';


export default class RunShow extends React.Component {
  componentDidMount() {
    this.props.requestSingleRun(this.props.params.runId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.runId !== nextProps.params.runId) {
      this.props.requestSingleRun(nextProps.params.runId);
    }
  }

  render () {
    const run = this.props.run;
    const errors = this.props.errors;
    debugger
    if (!run) {
      return <LoadingIcon />;
    } else{
      return (
        <div>
          <ErrorsList  errors={ errors } />
          <h3>{run.date}</h3>
          <p>{run.description}</p>
          <div>{run.route.image_url}</div> {/*????? */}
          <Link to="/my-runs">Back to My Runs</Link>
        </div>
      );
    }
  }
}
