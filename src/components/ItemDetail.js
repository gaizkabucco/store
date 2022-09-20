import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext"
import ItemCount from "./ItemCount"

const ItemDetail = ({ item }) => {
	const initial = 1
	const [quantity, setQuantity] = useState(0)

	const { AddItem } = useCartContext()

	const onAdd = quantityToAdd => {
		if (quantity !== "SIN STOCK") {
			setQuantity(quantityToAdd)
			alert(`Elemento/s agregado/s al carrito.`)
			AddItem(item, quantityToAdd)
		}
	}

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
				<span>Stock: {item.stock}</span>
				{quantity ? (
					<Link to={`/cart`}>
						<button className='bg-green-200 w-full py-1'>Terminar mi compra</button>
					</Link>
				) : (
					<ItemCount stock={item.stock} displayQuantity={item?.stock === 0 ? "SIN STOCK" : initial} onAdd={onAdd} />
				)}
			</div>
		)
	}
}

export default ItemDetail
