import { Link } from "react-router-dom"

const Item = item => {
	return (
		<Link to={`/item/${item.id}`}>
			<div className='flex flex-col items-center text-center'>
				<img src={item.pictureUrl} alt={item.title} className='aspect-video object-cover cursor-pointer' />
				<h2 className='hover:underline cursor-pointer'>{item.title}</h2>
				<h3>{`$${item.price.toString()},00`}</h3>
			</div>
		</Link>
	)
}

export default Item
