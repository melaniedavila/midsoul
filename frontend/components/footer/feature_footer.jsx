import React from 'react';

export default class FeatureFooter extends React.Component {
  render(){
    return(
      <div className="feature-footer">
        <ul className='feature-list'>
          <li className='feature-list-item'>
            <i className="fa fa-map-marker fa-5x" aria-hidden="true"></i>
            <div className='feature-header-and-description'>
              <h2>MAP YOUR ROUTE</h2>
              <p>Know where you're going, see where you've been. Choose from one of our routes or be bold and create your own.</p>
            </div>
          </li>
          <li className='feature-list-item'>
            <i className="fa fa-pencil fa-5x" aria-hidden="true"></i>
            <div className='feature-header-and-description'>
              <h2>LOG YOUR RUNS</h2>
              <p>Record your runs and never miss a beat.</p>
            </div>
          </li>
          <li className='feature-list-item'>
            <i className="fa fa-users fa-5x" aria-hidden="true"></i>
            <div className='feature-header-and-description'>
              <h2>SHARE WITH FRIENDS</h2>
              <p>Get extra encouragement, cheer on your buddies or start a little friendly competition.</p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
