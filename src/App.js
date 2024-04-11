import React, { useState, useEffect } from "react";
import "./App.css";
import "./components/globalStyle.css";

import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";

const App = () => {
  return (
    <div className='app'>
      <div className='upper'>
        <Component1 />
        <Component2 />
      </div>
      <div className='lower'>
        <Component3 />
      </div>
    </div>
  );
};

export default App;
