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
	menuOnClick(e){
		e.target.className = 'menu-active';
	}

	menuOnBlur(e){
		e.target.removeAttribute('class')
	}
	render() {
		return (
			<aside className="sidebar">
				<ul>
					<li><Link onClick={this.menuOnClick} onBlur={this.menuOnBlur} to="/"><span><FontAwesomeIcon size="sm" icon="tachometer-alt"></FontAwesomeIcon></span> <span>Dashboard</span></Link></li>
					<li><Link onClick={this.menuOnClick} onBlur={this.menuOnBlur} to="/selling"><span><FontAwesomeIcon size="sm" icon="cash-register"></FontAwesomeIcon></span> <span>Selling</span></Link></li>
					<li><Link onClick={this.menuOnClick} onBlur={this.menuOnBlur} to="/history"><span><FontAwesomeIcon size="sm" icon="history"></FontAwesomeIcon></span> <span>History</span></Link></li>
					<li><Link onClick={this.menuOnClick} onBlur={this.menuOnBlur} to="/customers"><span><FontAwesomeIcon size="sm" icon="users"></FontAwesomeIcon></span> <span>Customers</span></Link></li>
					<li><Link onClick={this.menuOnClick} onBlur={this.menuOnBlur} to="/users"><span><FontAwesomeIcon size="sm" icon="users-cog"></FontAwesomeIcon></span> <span>Users</span></Link></li>
					<li><Link onClick={this.menuOnClick} onBlur={this.menuOnBlur} to="/report"><span><FontAwesomeIcon size="sm" icon="file-alt"></FontAwesomeIcon></span> <span>Report</span></Link></li>
					<li><Link onClick={this.menuOnClick} onBlur={this.menuOnBlur} to="/settings"><span><FontAwesomeIcon size="sm" icon="cog"></FontAwesomeIcon></span> <span>Settings</span></Link></li>
				</ul>
			</aside>
		);
	}
}

export default connect(
	mapStateToProps,
)(Sidebar);