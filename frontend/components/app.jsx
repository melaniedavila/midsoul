import React from 'react';
import NavigationContainer from './navigation/navigation_container';

const App = function (props) {
  return(
    <div>
      <h1>midSoul</h1>
      <NavigationContainer />
      { props.children }
    </div>
  );
};

export default App;
