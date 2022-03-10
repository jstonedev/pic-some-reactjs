import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { ShopContext } from "../context/ShopContext";
import useHover from "../hooks/useHover";

function CartItem({ item }) {
	const { removeCartItem } = useContext(ShopContext);
	const [hovered, ref] = useHover();

	const iconClass = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";

	return (
		<div className="cart-item">
			<i
				className={iconClass}
				onClick={() => removeCartItem(item.id)}
				ref={ref}
			/>
			<img src={item.url} width="130px" alt="selected" />
			<p>$5.99</p>
		</div>
	);
}

CartItem.propTypes = {
	item: PropTypes.shape({
		url: PropTypes.string.isRequired,
	}),
};

export default CartItem;
