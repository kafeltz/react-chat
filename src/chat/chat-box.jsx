var ChatHeader = require('./chat-header.jsx');
var ChatBody = require('./chat-body.jsx');
var ChatFooter = require('./chat-footer.jsx');
require("./index.css");

module.exports = React.createClass({
  render: function() {
    return (
          <div className="chatBox">
            <ChatHeader />
            <ChatBody />
            <ChatFooter />
          </div>
        );
  },
});