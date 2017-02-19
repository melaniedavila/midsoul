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
    if (!run) {
      return <LoadingIcon />;
    } else{
      return (
        <div>
          <ErrorsList errors={ errors } />
          <h4>{run.runner.f_name} ran {run.route.distance} miles on {run.date}</h4>
          <p>{run.description}</p>
            <img src={`https://maps.googleapis.com/maps/api/staticmap?size=300x150&path=color:0x0c5d94%7Cenc:${run.route.polyline}&key=${window.googleMapsApiKey}`}
                  alt={run.route.title}></img>
          <Link to="/my-runs">Back to My Runs</Link>
        </div>
      );
    }
  }
}
