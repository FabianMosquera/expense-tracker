import React, { useState } from "react";
import Form from "../../components/Form";
import History from "../../components/History";
import Dashboard from "../../components/Dashboard";

function Home() {
  const [history, setHistory] = useState([{ item: "", value: 0 }]);

  return (
    <>
      <Dashboard history={history} setHistory={setHistory} />
      <History history={history} setHistory={setHistory} />
      <Form history={history} setHistory={setHistory} />
    </>
  );
}

export default Home;
