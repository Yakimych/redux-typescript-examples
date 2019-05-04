import React from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component1WithThunk from "./Component1WithThunk";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">Test: typing redux thunks</header>
      <div className="content">
        <Component1 />
        <Component2 />
        <Component1WithThunk />
      </div>
    </div>
  );
};

export default App;
