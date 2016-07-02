import React from "react";


export default class Loading extends React.Component {
    constructor(props) {    /* Note props is passed into the constructor in order to be used */
       super(props);
       this.state = {
           loading: false
       };
    }

    setStatus(loading) {
      this.setState({loading: loading});
    }

    getLabel() {
      return this.state.loading ? 'Loading' : 'Not loading';
    }

    render() {
      var label = this.getLabel();
      return (
        <a href="#" className="loading" data-chat-status="loading">{label}</a>
      );
    }
}
