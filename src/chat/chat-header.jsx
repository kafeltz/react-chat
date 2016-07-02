import React from 'react';
import ChatStatus from './chat-status.jsx';
import ChatControls from './chat-controls.jsx';


export default class ChatHeader extends React.Component {
  render() {
    return (
        <div className="chatHeader">
            <ChatStatus />
            <ChatControls />
        </div>
    );
  }
}
