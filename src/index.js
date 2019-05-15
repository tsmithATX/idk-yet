import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { GameController } from "./GameController";

function App() {
  return (
    <div className="App">
      <h1>IDK YET</h1>
      <GameController />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
