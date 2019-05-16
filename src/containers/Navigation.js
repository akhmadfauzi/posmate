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
				
				<div className="navbar-profile">
					<div className="image">
						<img src="https://imgplaceholder.com/50x50/fff/333333/fa-user" alt=""/>
					</div>
					<div className="name">Jane Doe <FontAwesomeIcon icon="caret-down"></FontAwesomeIcon></div>
				</div>
			</nav>
		);
	}
}

export default connect(
	mapStateToProps,
)(Navigation);