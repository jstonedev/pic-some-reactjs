import React, { useState, useEffect } from "react";
const ShopContext = React.createContext();

function ShopContextProvider({ children }) {
	const [allPhotos, setAllPhotos] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [orderMessage, setOrderMessage] = useState("");

	const toggleFavorite = (id) => {
		const updatedArr = allPhotos.map((photo) => {
			if (photo.id === id) {
				return { ...photo, isFavorite: !photo.isFavorite };
			}
			return photo;
		});

		setAllPhotos(updatedArr);
	};

	const addToCart = (newItem) => {
		setCartItems((prevItems) => [...prevItems, newItem]);
	};

	const removeCartItem = (id) => {
		setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
	};

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetch(
				"https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
			);
			const json = await data.json();
			setAllPhotos(json);
		};

		fetchData().catch(console.error);
	}, []);

	return (
		<ShopContext.Provider
			value={{
				allPhotos,
				toggleFavorite,
				addToCart,
				cartItems,
				removeCartItem,
				setCartItems,
			}}>
			{children}
		</ShopContext.Provider>
	);
}

export { ShopContextProvider, ShopContext };
