import Item from "./Item"

const ItemList = ({ items }) => {
	return (
		<div className='grid gap-10 grid-cols-2 md:grid-cols-3'>
			{items.map(item => (
				<Item key={item.id} title={item.title} price={item.price} pictureUrl={item.pictureUrl} />
			))}
		</div>
	)
}

export default ItemList
