import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from './ProductList';

function mapStateToProps(state) {
	return {

	};
}

class Selling extends Component {
	render() {
		const productList = <ProductList></ProductList>;
		return (
			<div className="selling-container">
				{productList}
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
)(Selling);