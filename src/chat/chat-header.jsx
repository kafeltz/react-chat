var ChatStatus = require('./chat-status.jsx');
var ChatControls = require('./chat-controls.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="chatHeader">
        <ChatStatus />
        <ChatControls />
      </div>);
  },
});
