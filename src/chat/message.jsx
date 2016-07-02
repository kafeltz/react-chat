import React from "react";


export default class Message extends React.Component {
    constructor(props) {
        super(props);

        this.count = 3;
    }

    handleClick(e) {
        this.count = this.count + 1;

        this.append(this.count, e.currentTarget.value);
    }

    append(count, msg) {
        this.props.onNewMsg(count, msg);
    }

    render() {
        return <input onClick={this.handleClick.bind(this)} className="message" type="text" defaultValue="Hello!" />;
    }
}
