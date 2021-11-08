import { useState } from "react";
import "./App.css";

function App() {
  const [stan, setStan] = useState("xd");

  return (
    <>
      <h1>{stan}</h1>
    </>
  );
}

export default App;
