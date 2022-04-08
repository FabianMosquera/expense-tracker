import React, { useState } from "react";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Home />
      </Wrapper>
    </div>
  );
}

export default App;
