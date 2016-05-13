module.exports = React.createClass({
  handleClick: function(e) {
    console.log(e.currentTarget.value);
  },
  render: function() {
    return <input onClick={this.handleClick} className="message" type="text" defaultValue="Hello!" />;
  }
});
