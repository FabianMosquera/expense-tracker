import React, { useState } from "react";
import Form from "./components/Form";
import History from "./components/History";
import Wrapper from "./components/Wrapper";
import "./App.css";

function App() {
  const [history, setHistory] = useState([{ item: "", value: 0 }]);

  return (
    <div className="App">
      <Wrapper>
        <History history={history} setHistory={setHistory} />
        <Form history={history} setHistory={setHistory} />
      </Wrapper>
    </div>
  );
}

export default App;
