import React from "react";


export default class Message extends React.Component {
    handleClick(e) {
      console.log(e.currentTarget.value);
    }

    render() {
        return <input onClick={this.handleClick} className="message" type="text" defaultValue="Hello!" />;
    }
}
