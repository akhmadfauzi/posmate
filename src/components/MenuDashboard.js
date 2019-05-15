import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/menu-dashboard.scss';

function mapStateToProps(state) {
	return {

	};
}

class MenuDashboard extends Component {
	render() {
		return (
			<section className="menus">
				<div className="menus__header">
					<ul>
						<li><Link to={`${this.props.match.url}/drinks`}>Drinks</Link></li>
						<li><Link to={`${this.props.match.url}/dessert`}>Dessert</Link></li>
						<li><Link to={`${this.props.match.url}/snack`}>Snack</Link></li>
						<li><Link to={`${this.props.match.url}/pastries`}>Pastries</Link></li>
					</ul>
				</div>
				{/* <div className="menus__body">
				</div>
				<div className="menus__footer"></div> */}
			</section>
		);
	}
}

export default connect(
	mapStateToProps,
)(MenuDashboard);