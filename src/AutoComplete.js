import React from "react";
import './AutoComplete.css'

export default class AutoCompleteText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSuggestion: 0,
            suggestions: [],
            text: '',
        }
    }



    onTextChanged = (e) => {
        const {items} = this.props;
        const value = e.target.value;
        let suggestions = []
        if (value.length > 0) {
            const regex = new RegExp(`${value}`, 'i');
            suggestions = items.sort().filter(v => regex.test(v));
        }
        this.setState(() => ({
            activeSuggestion: 0,
            suggestions,
            text: value
        }))
    }

    onKeyDown = e => {
        const {activeSuggestion, suggestions} = this.state;

        const {items} = this.props;
        const value = e.target.value;
        //User pressed the enter key, update the input and close the suggestions
        if (e.keyCode === 13) {
            this.setState(() => ({
                activeSuggestion: 0,
                suggestions: [],
                text: suggestions[activeSuggestion]
            }))
        } //User pressed the up arrow, decrement the index
        else if (e.keyCode === 38) {
            if (activeSuggestion === 0) {
                return;
            }
            this.setState(() => ({
                activeSuggestion: activeSuggestion - 1
            }))
        }
        //User pressed the down arrow, increment the index
        else if (e.keyCode === 40) {
            if (activeSuggestion - 1 === items.length) {
                return;
            }
            this.setState(() => ({
                activeSuggestion: activeSuggestion + 1
            }))
        }

    }


    renderSuggestion() {
        const {suggestions, activeSuggestion} = this.state;
        if (suggestions.length === 0) {
            return null;
        } else {
            return (
                <ul>
                    {suggestions.map((item, index) => {
                            let className;
                            if (index === activeSuggestion) {
                                className = "suggestion-active";
                            }
                            return (<li className={className} onClick={() => this.suggestionSelected(item)}
                                        onKeyPress={() => this.onKeyDown(this)}> {item}</li>)
                        }
                    )}
                </ul>
            )
        }
    }

    suggestionSelected(value) {
        this.setState(() => ({
            activeSuggestion: 0,
            text: value,
            suggestions: [],
        }))
    }

    render() {
        const {text} = this.state;
        const {onKeyDown} = this;
        return (
            <div className={"AutoComplete"}>
                <input value={text} onChange={this.onTextChanged} type={"text"} onKeyDown={onKeyDown}/>
                <ul>
                    {this.renderSuggestion()}
                </ul>
            </div>
        )
    }
}
