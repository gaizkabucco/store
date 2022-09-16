import { useState } from "react"

const ItemCount = ({ stock, displayQuantity, onAdd }) => {
	const [quantity, setQuantity] = useState(displayQuantity)

	return (
		<div className='w-full border-t border-transparent'>
			<div className='flex border-t justify-between'>
				<button
					onClick={() => {
						if (quantity > displayQuantity) {
							setQuantity(quantity - 1)
						}
					}}
					className='bg-gray-200 px-4 py-1'
				>
					-
				</button>
				<div>{quantity}</div>
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
			<button className='bg-green-200 w-full py-1' onClick={() => onAdd(quantity)}>
				AGREGAR AL CARRITO
			</button>
		</div>
	)
}

export default ItemCount
