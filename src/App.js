import React from "react";

const App = () => {
  console.log("NODE_ENV:", process.env.NODE_ENV);
  console.log("REACT_APP_STAGE:", process.env.REACT_APP_STAGE);

  const title =
    process.env.NODE_ENV === "procition" ? "TITLE: PRODUCTION" : "TITLE: LOCAL";

  return (
    <div className="App">
      Hello World
      <h1>{title}</h1>
      <h1>{process.env.REACT_APP_STAGE}</h1>
    </div>
  );
};

export default App;
