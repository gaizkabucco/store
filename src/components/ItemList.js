import Item from "./Item"

const ItemList = ({ items }) => {
	if (!items.length) {
		return (
			<div className='text-center'>
				<h3>Cargando...</h3>
			</div>
		)
	} else {
		return (
			<div className='grid grid-cols-2 gap-8 lg:grid-cols-3'>
				{items.map(item => (
					<Item key={item.id} {...item} />
				))}
			</div>
		)
	}
}

export default ItemList
