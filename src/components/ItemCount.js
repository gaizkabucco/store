import { useState } from "react"

const ItemCount = ({ stock, initial }) => {
	const displayQuantity = stock === 0 ? "SIN STOCK" : initial
	const [quantity, setQuantity] = useState(displayQuantity)
	const onAdd = () => {
		if (quantity !== "SIN STOCK") {
			console.log(`Se ha/n agregado ${quantity} elemento/s al carrito`)
		}
	}

	return (
		<div className='w-full border-t border-transparent'>
			<div className='flex border-t justify-between'>
				<button
					onClick={() => {
						if (quantity > initial) {
							setQuantity(quantity - 1)
						}
					}}
					className='bg-gray-200 px-4 py-1'
				>
					-
				</button>
				<div>
					<p className='py-1'>{quantity}</p>
				</div>
				<button
					onClick={() => {
						if (quantity < stock) {
							setQuantity(quantity + 1)
						}
					}}
					className='bg-gray-200 px-4 py-1'
				>
					+
				</button>
			</div>
			<button className='bg-green-200 w-full py-1' onClick={onAdd}>
				AGREGAR AL CARRITO
			</button>
		</div>
	)
}

export default ItemCount
