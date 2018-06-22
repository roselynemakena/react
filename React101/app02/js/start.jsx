var React = require('react')
var btn = React.createClass({
	render: function() {
		return (
			<div>
				<button> Okay </button>
			</div>
			);
	}
});

ReactDOM.render(btn, document.findElementById("root"));