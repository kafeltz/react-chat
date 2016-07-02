import React from 'react';
import Loading from './loading';



export default class ChatStatus extends React.Component {
  render() {
    return (
        <div className="chatStatus">
        <ul>
          <li><Loading /></li>
          <li><a href="#" data-chat-status="enabled">Enabled</a></li>
        </ul>
      </div>
    );
  }
}
