module.exports = React.createClass({
  render: function() {
    return (
        <div className="chatControls">
        <ul>
            <li><a href="#" data-chat-action="settings">Setting #1</a></li>
          <li><a href="#" data-chat-action="settings">Setting #2</a></li>
            <li><a href="#" data-chat-action="minimize">Minimize</a></li>
          <li><a href="#" data-chat-action="minimize">Fullscreen</a></li>
        </ul>
      </div>
    );
  },
});
