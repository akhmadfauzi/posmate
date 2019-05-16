import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from './ProductList';
import Cart from './Cart';
import '../styles/selling.scss';
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
				{/* <Cart></Cart> */}
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
)(Selling);