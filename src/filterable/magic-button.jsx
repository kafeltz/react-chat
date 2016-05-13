module.exports = React.createClass({
	handleClick: function(e) {
        var obj = {
        	category: 'abc', 
        	price: '$777.77', 
        	stocked: false, 
        	name: 'xxxxxxxx'
        };

        var products = this.state.products.concat([obj]);

        this.setState({products: products});
    },
	render: function(){
		return (<button  onClick={this.handleClick}>Click me!</button>);
	}
});
