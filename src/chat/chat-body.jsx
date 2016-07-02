import React from "react";
import Line from "./line";


export default class ChatBody extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="chatBody">
                <Line lines={this.props.conversations} />
            </div>
        );
    }
}
