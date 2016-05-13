module.exports = React.createClass({
  getInitialState: function() {
    return { loading: false };
  },
  setStatus: function(loading) {
    this.setState({loading: loading});
  },
  getLabel: function() {
    return this.state.loading ? 'Loading' : 'Not loading';
  },
  render: function() {
    var label = this.getLabel();
    return (
      <a href="#" class="loading" data-chat-status="loading">{label}</a>
    );
  },
});
