import React from 'react';


const App = function (props) {
  // <NavigationContainer />
  return(
    <div>
      <h1>midSoul</h1>
      { props.children }
    </div>
  );
};

export default App;
