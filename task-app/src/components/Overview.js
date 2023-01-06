import React from "react";

export default class Overview extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <p>{this.props.text}</p>
        )
    }
}