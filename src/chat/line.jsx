import React from "react";


export default class Line extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var lines = [];

        for (var i = 0, total = this.props.lines.length; i < total; i++) {
            lines.push(<li key={i}><b>{this.props.lines[i].count}:</b> {this.props.lines[i].msg}</li>);
        }

        return (
            <ul>{lines}</ul>
        );
    }
}
