import React from "react";

export default class HideableText extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
        <div>
            <button>Toggle</button>
            Some Text Here
        </div>
        );
    }
}
