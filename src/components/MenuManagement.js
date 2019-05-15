import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
	return {

	};
}

class MenuManagement extends Component {
	render() {
		let type = this.props.match.params.type;
		return (
			<section className="menu-management">
				<form>
					<input type="hidden" value={type}/>
					<div>
						<label>Name</label>
						<input type="text" name="name"/>
					</div>
				</form>
			</section>
		);
	}
}

export default connect(
	mapStateToProps,
)(MenuManagement);