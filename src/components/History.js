import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
	return {

	};
}

class History extends Component {
	render() {
		return (
			<div>
				History
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
)(History);