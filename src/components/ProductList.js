import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductListItem from './ProductListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
			<div className="product-list-container">
				<div className="navbar-search"><label htmlFor="SearchBar"><FontAwesomeIcon icon="search"></FontAwesomeIcon></label><input type="text" id="SearchBar" /></div>
				<div className="product-category">
					<div className="product-category-item">
						Main Course
					</div>
					<div className="product-category-item">
						Beverages
					</div>
					<div className="product-category-item">
						Dessert
					</div>
					<div className="product-category-item">
						Appetizer
					</div>
				</div>
				<div className="product-list">
					{products}
				</div>
			</div>

		);
	}
}

export default connect(
	mapStateToProps,
)(ProductList);