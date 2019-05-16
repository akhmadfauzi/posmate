import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/cart-list.scss';
function mapStateToProps(state) {
	return {

	};
}

class CartList extends Component {
	render() {
		return (
			<div className="cart-list">
				<div className="cart-list-item">
					<div className="quantity">1</div>
					<div className="name">Espresso</div>
					<div className="price">$4</div>
				</div>
				<div className="cart-list-item">
					<div className="quantity">1</div>
					<div className="name">Espresso</div>
					<div className="price">$4</div>
				</div>
				<div className="cart-list-item">
					<div className="quantity">1</div>
					<div className="name">Espresso</div>
					<div className="price">$4</div>
				</div>
				<div className="cart-list-item">
					<div className="quantity">1</div>
					<div className="name">Espresso</div>
					<div className="price">$4</div>
				</div>
				<div className="cart-list-item">
					<div className="quantity">1</div>
					<div className="name">Espresso</div>
					<div className="price">$4</div>
				</div>
				<div className="cart-list-item">
					<div className="quantity">1</div>
					<div className="name">Espresso</div>
					<div className="price">$4</div>
				</div>
				<div className="cart-list-item">
					<div className="quantity">1</div>
					<div className="name">Espresso</div>
					<div className="price">$4</div>
				</div>
				<div className="cart-list-item">
					<div className="quantity">1</div>
					<div className="name">Espresso</div>
					<div className="price">$4</div>
				</div>
				<div className="cart-list-item">
					<div className="quantity">1</div>
					<div className="name">Espresso</div>
					<div className="price">$4</div>
				</div>
				<div className="cart-list-item">
					<div className="quantity">1</div>
					<div className="name">Espresso</div>
					<div className="price">$4</div>
				</div>
				<div className="cart-list-item">
					<div className="quantity">1</div>
					<div className="name">Espresso</div>
					<div className="price">$4</div>
				</div>
				<div className="cart-list-item">
					<div className="quantity">1</div>
					<div className="name">Espresso</div>
					<div className="price">$4</div>
				</div>
				<div className="cart-list-item">
					<div className="quantity">1</div>
					<div className="name">Espresso</div>
					<div className="price">$4</div>
				</div>
				<div className="cart-list-item">
					<div className="quantity">1</div>
					<div className="name">Espresso</div>
					<div className="price">$4</div>
				</div>
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
)(CartList);