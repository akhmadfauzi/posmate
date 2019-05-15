import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductListItem from './ProductListItem';
import '../styles/product-list.scss';
function mapStateToProps(state) {
	return {

	};
}

class ProductList extends Component {

	products() {
		let products = [];
		for (let i = 0; i < 10; i++) {
			products.push(<ProductListItem key={i}></ProductListItem>);
		}
		return products;
	}
	render() {
		const products = this.products();
		return (
			<div className="product-list">
				{products}
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
)(ProductList);