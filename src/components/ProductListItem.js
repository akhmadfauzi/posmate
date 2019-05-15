import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/product-list-item.scss';

function mapStateToProps(state) {
	return {

	};
}

class ProductListItem extends Component {
	render() {
		const img = 'https://imgplaceholder.com/200x100/fff/333333/fa-image';
		return (
			<div className="product-list-item">
				<div className="product-image">
					<img src={img} alt="" />
				</div>
				<div className="product-title">lorem</div>
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
)(ProductListItem);