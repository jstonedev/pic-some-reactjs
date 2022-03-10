import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

function Header() {
	const { cartItems } = useContext(ShopContext);

	const cartClass =
		cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line";

	return (
		<header>
			<Link to="/">
				<h2>Pic Some</h2>
			</Link>
			<Link to="/cart">
				<i className={`${cartClass} ri-fw ri-2x`} />
			</Link>
		</header>
	);
}

export default Header;
