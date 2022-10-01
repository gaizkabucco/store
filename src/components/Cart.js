import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext"
import UserForm from "./UserForm"

const Cart = () => {
	const { cart, removeItem, clear } = useCartContext()

	return (
		<div className='text-center'>
			{cart.length ? (
				<div>
					{cart.map(item => (
						<div key={item.id} className='flex flex-col items-center text-center py-6'>
							<Link to={`/item/${item.id}`}>
								<img className='max-h-32 object-contain aspect-video mx-auto' src={item.pictureUrl} alt={item.title} />
								<h3 className='hover:underline'>{item.title}</h3>
							</Link>
							<h3>Cantidad: {item.quantity}</h3>
							<h3>Subtotal: {item.price * item.quantity}$</h3>
							<button className='border-2 w-content py-1 px-2 rounded-md' onClick={() => removeItem(item)}>
								Eliminar
							</button>
						</div>
					))}
					<div className='flex flex-col items-center'>
						<span>Total: {cart.reduce((total, item) => (total += item.quantity * item.price), 0)}$</span>
						<button className='border-2 w-content py-1 px-2 rounded-md' onClick={clear}>
							Eliminar Todo
						</button>
						<UserForm total={cart.reduce((total, item) => (total += item.quantity * item.price), 0)} />
					</div>
				</div>
			) : (
				<div className='flex justify-center p-6 flex-col'>
					<h3>No Hay Productos</h3>
					<Link to={"/"}>
						<p className='underline mt-3'>Volver a la tienda</p>
					</Link>
				</div>
			)}
		</div>
	)
}

export default Cart
