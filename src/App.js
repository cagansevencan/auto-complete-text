import React, {useEffect} from 'react';
import './App.css';
import AutoCompleteText from "./AutoComplete";
import diseaseWords from "./diseaseWords";
import drugWords from "./drug-dict"

function App() {
    useEffect(() => {
        const words = [];
        const promises = new Array(1000).fill()
            .map((v, i) => fetch(`http://people.dbmi.columbia.edu/~friedma/Projects/DiseaseSymptomKB/index.html/${i + 1}`));
        Promise.all(promises).then((healthArray) => {
            return healthArray.map(res => res.json().then(({disease, symptom, sprites: {front_default: sprite}}) => {
                return words.push({disease, symptom, sprite});
            })
            );

        } );
    }, []);
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
