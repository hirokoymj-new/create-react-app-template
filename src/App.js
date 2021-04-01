import React from "react";
import config from "Config/config";

const App = () => {
  console.log("NODE_ENV:", process.env.NODE_ENV);
  console.log("REACT_APP_LOCAL:", process.env.REACT_APP_LOCAL);
  console.log(JSON.stringify(config));

  return (
    <div className="App">
      Hello World
      <h1>{process.env.NODE_ENV}</h1>
      <h1>{process.env.REACT_APP_LOCAL}</h1>
    </div>
  );
};

export default App;
