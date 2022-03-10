import React, { useContext, useState } from "react";
import CartItem from "../components/CartItem";
import { ShopContext } from "../context/ShopContext";

function Cart() {
	const [buttonText, setButtonText] = useState("Place Order");
	const [cartMessage, setCartMessage] = useState("Check Out");
	const { cartItems, setCartItems } = useContext(ShopContext);
	const totalCost = 5.99 * cartItems.length;
	const totalCostDisplay = totalCost.toLocaleString("en-US", {
		style: "currency",
		currency: "USD",
	});

	const cartItemElements = cartItems.map((item) => (
		<CartItem key={item.id} item={item} />
	));

	const placeOrder = () => {
		setButtonText("Placing order...");
		setTimeout(() => {
			setCartItems([]);
			setCartMessage("Order was successful!");
		}, 3000);
	};

	return (
		<main className="cart-page">
			<h1>{cartMessage}</h1>
			{cartItemElements}
			<p className="total-cost">Total: {totalCostDisplay}</p>
			{cartItems.length > 0 ? (
				<div className="order-button">
					<button onClick={placeOrder}>{buttonText}</button>
				</div>
			) : (
				<p>Your cart is empty</p>
			)}
		</main>
	);
}

export default Cart;
