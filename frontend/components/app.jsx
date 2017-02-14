import React from 'react';

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
