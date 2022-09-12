import ItemCount from "./ItemCount"
const ItemDetail = ({ item }) => {
	if (item === undefined) {
		return (
			<div className='text-center'>
				<h3>Cargando...</h3>
			</div>
		)
	} else {
		return (
			<div className='flex flex-col item-center text-center w-4/5 max-w-3xl m-auto'>
				<img src={item.pictureUrl} alt={item.title} className='aspect-video object-cover cursor-pointer' />
				<h2 className='hover:underline cursor-pointer'>{item.title}</h2>
				<h3>{`$${item.price.toString()},00`}</h3>
				<h4>{item.description}</h4>
				<ItemCount stock={item.stock} initial={1} />
			</div>
		)
	}
}

export default ItemDetail
