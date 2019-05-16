import React, { Component } from 'react';
import '../styles/cart.scss';
import '../styles/button.scss';
import CartList from './CartList';
class Cart extends Component {
	render() {
		return (
			<section className="cart">
				<div className="cart__header">
					<div className="cashier">
						<div className="date">
							Wed, May 22 2019
						</div>
						<div className="profile">
							{/* <div className="profile__img">image</div> */}
							<div className="profile__name">John Doe</div>
						</div>

					</div>
					<div className="order-number"></div>
					<div className="customer-name"></div>
					<div className="table-loc"></div>
				</div>
				<div className="cart__body">
					<CartList></CartList>
				</div>
				<div className="cart__footer">
					<div className="price">
						<div className="price__sub-total">
							<span>Sub Total</span>
							<span>$12</span>
						</div>
						<div className="price__discount">
							<span>Discount</span>
							<span>-</span>
						</div>
						<div className="price__tax">
							<span>Tax</span>
							<span>10%</span>
						</div>
					</div>
					<div className="checkout">
						<button className="button button-primary">Checkout</button>
					</div>
				</div>
			</section>
		);
	}
}

export default Cart;