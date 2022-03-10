import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ShopContext } from "../context/ShopContext";
import useHover from "../hooks/useHover";

function Image({ className, img }) {
	const [hovered, ref] = useHover();
	const { toggleFavorite, addToCart, cartItems, removeCartItem } =
		useContext(ShopContext);

	function heartIcon() {
		if (img.isFavorite) {
			return (
				<i
					className="ri-heart-fill favorite"
					onClick={() => toggleFavorite(img.id)}></i>
			);
		} else if (hovered) {
			return (
				<i
					className="ri-heart-line favorite"
					onClick={() => toggleFavorite(img.id)}></i>
			);
		}
	}

	function cartIcon() {
		const selectedItem = cartItems.some((item) => item.id === img.id);
		if (selectedItem) {
			return (
				<i
					className="ri-shopping-cart-fill cart"
					onClick={() => removeCartItem(img.id)}
				/>
			);
		} else if (hovered) {
			return (
				<i className="ri-add-circle-line cart" onClick={() => addToCart(img)} />
			);
		}
	}

	return (
		<div className={`${className} image-container`} ref={ref}>
			<img src={img.url} className="image-grid" alt="random-photos" />
			{heartIcon()}
			{cartIcon()}
		</div>
	);
}

Image.propTypes = {
	className: PropTypes.string,
	img: PropTypes.shape({
		id: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
		isFavorite: PropTypes.bool,
	}),
};

export default Image;
