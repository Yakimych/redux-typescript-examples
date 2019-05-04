import React from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">Redux test</header>
      <div className="content">
        <Component1 />
        <Component2 />
      </div>
    </div>
  );
};

export default App;
