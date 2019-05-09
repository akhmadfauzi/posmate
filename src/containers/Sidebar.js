import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/sidebar.scss';

function mapStateToProps(state) {
	return {

	};
}

class Sidebar extends Component {
	render() {
		return (
			<aside className="sidebar">
				<ul>
					<li>Dashboard</li>
					<li>Selling</li>
					<li>History</li>
					<li>Customers</li>
					<li>Users</li>
					<li>Settings</li>
				</ul>
			</aside>
		);
	}
}

export default connect(
	mapStateToProps,
)(Sidebar);