import React from "react";
import config from "Config/config";
import { TestView } from "PageView/TestView";

const URI = config.URI;

console.log(config);

const App = () => {
  // console.log("NODE_ENV:", process.env.NODE_ENV);
  // console.log("REACT_APP_STAGE:", process.env.REACT_APP_STAGE);

  return (
    <div>
      <TestView />
      {URI}
    </div>
  );
};

export default App;
