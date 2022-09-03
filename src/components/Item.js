import React from "react"

const Item = ({ title, price, pictureUrl }) => {
	return (
		<article className='flex flex-col items-center text-center'>
			<img src={pictureUrl} alt={title} />
			<h3>{title}</h3>
			<p>{price}</p>
		</article>
	)
}

export default Item
