import React from 'react';
import logo from './logo.svg';
import './App.css';
import HideableText from "./HideableText";
import AutoCompleteText from "./AutoComplete";
import diseaseWords from "./diseaseWords";
import drugWords from "./drug-dict"

function App() {
    return (
        <div className="App">
            <h1> Welcome to AutoComplete Wizardry!</h1>
            <h2 className={"App-Margin"}>
                Search for diseases:
            </h2>
            <div className={"App-Component"}>
                <AutoCompleteText items={diseaseWords}/>
            </div>
            <br/><br/>
            <h2 className={"App-Margin"}>
                Search for drugs:
            </h2>
            <div className={"App-Component"}>
                <AutoCompleteText items={drugWords}/>
            </div>
        </div>
    );
}

export default App;
