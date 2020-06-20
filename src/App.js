import React from 'react';
import logo from './logo.svg';
import './App.css';
import HideableText from "./HideableText";
import AutoCompleteText from "./AutoComplete";
import healthWords from "./healthWords";

function App() {
  return (
    <div className="App">
      <div className={"App-Component"}>
          <AutoCompleteText items={healthWords} />
      </div>

    </div>
  );
}

export default App;
