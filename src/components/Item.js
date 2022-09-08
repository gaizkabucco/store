import ItemCount from "./ItemCount"

const Item = ({ title, price, pictureUrl, stock }) => {
	return (
		<div className='flex flex-col items-center text-center'>
			<img src={pictureUrl} alt='title' />
			<h2>{title}</h2>
			<h3>{`$${price}`}</h3>
			<ItemCount stock={stock} initial={1} />
		</div>
	)
}

export default Item
