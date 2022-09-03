const ItemCount = ({ stock }) => {
	return (
		<div className='w-full border-t border-transparent'>
			<div className='flex border-t justify-between'>
				<button className='bg-gray-200 px-4 py-1'>-</button>
				<div>
					<p className='py-1'>{stock}</p>
				</div>
				<button className='bg-gray-200 px-4 py-1'>+</button>
			</div>
			<button className='bg-green-200 w-full py-1'>AGREGAR AL CARRITO</button>
		</div>
	)
}

export default ItemCount
