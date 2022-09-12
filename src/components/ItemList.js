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
			<div className='grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
				{items.map(item => (
					<Item key={item.id} {...item} />
				))}
			</div>
		)
	}
}

export default ItemList
