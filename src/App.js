import React from "react";

const App = () => {
  console.log("NODE_ENV:", process.env.NODE_ENV);
  console.log("REACT_APP_STAGE:", process.env.REACT_APP_STAGE);

  return (
    <div className="App">
      Hello World
      <h1>{process.env.NODE_ENV}</h1>
      <h1>{process.env.REACT_APP_STAGE}</h1>
    </div>
  );
};

export default App;
