import React from "react";
import Message from './message';


export default class ChatFooter extends React.Component {
    render() {
      return (
        <div className="chatFooter">
          <Message />
        </div>
        );
    }
}
