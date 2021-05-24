import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import React from "react";


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
};

export default React.memo(App);
