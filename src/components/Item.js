import React from "react"
import ItemCount from "./ItemCount"

const Item = ({ title, price, pictureUrl, stock }) => {
	return (
		<article className='flex flex-col items-center text-center'>
			<img src={pictureUrl} alt={title} />
			<h3>{title}</h3>
			<p>{price}</p>
			<ItemCount stock={stock} />
		</article>
	)
}

export default Item
