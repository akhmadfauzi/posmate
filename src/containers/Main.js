import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/main.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from '../components/Dashboard';
import Selling from '../components/Selling';
import History from '../components/History';

function mapStateToProps(state) {
	return {

	};
}

class Main extends Component {
	render() {
		return (
			<article className="main">
				<Route exact path="/" component={Dashboard} />
				<Route exact path="/selling" component={Selling} />
				<Route exact path="/history" component={History} />
			</article>
		);
	}
}

export default connect(
	mapStateToProps,
)(Main)