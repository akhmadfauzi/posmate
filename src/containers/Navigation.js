import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/navigation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function mapStateToProps(state) {
	return {

	};
}

class Navigation extends Component {
	render() {
		return (
			<nav className="navbar">
				<div className="navbar-brand">POSmate</div>
				<div className="navbar-search"><label htmlFor="SearchBar"><FontAwesomeIcon icon="search"></FontAwesomeIcon></label><input type="text" id="SearchBar" /></div>
				<div className="navbar-profile">profile</div>
			</nav>
		);
	}
}

export default connect(
	mapStateToProps,
)(Navigation);