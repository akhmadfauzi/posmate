import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/main.scss';

function mapStateToProps(state) {
	return {

	};
}

class Main extends Component {
	render() {
		return (
			<article className="main">
				Main
			</article>
		);
	}
}

export default connect(
	mapStateToProps,
)(Main)