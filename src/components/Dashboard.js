import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/dashboard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function mapStateToProps(state) {
	return {

	};
}

class Dashboard extends Component {
	render() {
		return (
			<div className="dashboard">
				<section className="dashboard__header-chart">
				dashboard
					{/* <div><span><FontAwesomeIcon size="3x" icon="shopping-cart"></FontAwesomeIcon></span><span>Sales</span></div>
					<div><span><FontAwesomeIcon size="3x" icon="users"></FontAwesomeIcon></span><span>Customers</span></div>
					<div><span><FontAwesomeIcon size="3x" icon="shopping-cart"></FontAwesomeIcon></span><span>Active orders</span></div> */}
				</section>
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
)(Dashboard);