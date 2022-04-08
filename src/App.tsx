import React, {useState} from "react";
import Form from "./components/Form";
import History from "./components/History";
import "./App.css";



function App() {
  const [history, setHIstory] = useState([
    {item:"", value:0}
  ]);
  return (
    <div className="App">
      <History history={history} setHistory={setHIstory} />
      <Form history={history} setHistory={setHIstory} />
    </div>
  );
}

export default App;
