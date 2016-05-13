var Message = require('./message.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="chatFooter">
        <Message />
      </div>);
  },
});
