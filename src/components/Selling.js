import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
	return {

	};
}

class Selling extends Component {
	render() {
		return (
			<div>
				Selling
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
)(Selling);