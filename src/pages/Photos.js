import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { getClass } from "../utils/index";
import Image from "../components/Image";

function Photos() {
	const { allPhotos } = useContext(ShopContext);

	const images = allPhotos.map((img, i) => (
		<Image key={img.id} img={img} className={getClass(i)} src={img.url} />
	));

	return <main className="photos">{images}</main>;
}

export default Photos;
