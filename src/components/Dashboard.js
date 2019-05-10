import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
	return {

	};
}

class Dashboard extends Component {
	render() {
		return (
			<div>
				Dashboard
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
)(Dashboard);