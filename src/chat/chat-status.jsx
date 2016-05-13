var Loading = require('./loading.jsx');

module.exports = React.createClass({
  render: function() {
    return (
        <div className="chatStatus">
        <ul>
          <li><Loading /></li>
          <li><a href="#" data-chat-status="enabled">Enabled</a></li>
        </ul>
      </div>
    );
  },
});
