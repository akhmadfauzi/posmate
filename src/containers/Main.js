import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/main.scss';
import { Route } from "react-router-dom";
import Dashboard from '../components/Dashboard';
import Selling from '../components/Selling';
import History from '../components/History';
import MenuDashboard from '../components/MenuDashboard';
import MenuManagement from '../components/MenuManagement';


function mapStateToProps(state) {
	return {

	};
}

class Main extends Component {
	render() {
		return (
			<article className="main">
				<Route exact path="/" component={Dashboard} />
				<Route path="/selling" component={Selling} />
				<Route path="/history" component={History} />
				<Route path="/menus" component={MenuDashboard} />
				<Route path="/menus/:type" component={MenuManagement} />
			</article>
		);
	}
}

export default connect(
	mapStateToProps,
)(Main)