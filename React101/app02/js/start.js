var btn = React.createClass({
	render: function() {
		return (
			<button>Okay</button>
			)
	}
});

React.render(<btn />, document.findElementById("root"));