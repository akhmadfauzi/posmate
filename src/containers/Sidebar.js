import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function mapStateToProps(state) {
	return {

	};
}

class Sidebar extends Component {
	render() {
		return (
			<aside className="sidebar">
				<ul>
					<li><span><FontAwesomeIcon size="sm" icon="tachometer-alt"></FontAwesomeIcon></span> <span><Link to="/">Dashboard</Link></span></li>
					<li><span><FontAwesomeIcon size="sm" icon="cash-register"></FontAwesomeIcon></span> <span><Link to="/selling">Selling</Link></span></li>
					<li><span><FontAwesomeIcon size="sm" icon="history"></FontAwesomeIcon></span> <span><Link to="/history">History</Link></span></li>
					<li><span><FontAwesomeIcon size="sm" icon="users"></FontAwesomeIcon></span> <span><Link to="/customers">Customers</Link></span></li>
					<li><span><FontAwesomeIcon size="sm" icon="users-cog"></FontAwesomeIcon></span> <span><Link to="/users">Users</Link></span></li>
					<li><span><FontAwesomeIcon size="sm" icon="file-alt"></FontAwesomeIcon></span> <span><Link to="/report">Report</Link></span></li>
					<li><span><FontAwesomeIcon size="sm" icon="cog"></FontAwesomeIcon></span> <span><Link to="/settings">Settings</Link></span></li>
				</ul>
			</aside>
		);
	}
}

export default connect(
	mapStateToProps,
)(Sidebar);