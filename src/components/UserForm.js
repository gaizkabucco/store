import { useState } from "react"
import { useCartContext } from "../context/CartContext"
import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore"
import { toast } from "react-toastify"

const UserForm = total => {
	const { cart, clear } = useCartContext()
	const [user, setUser] = useState({ name: "", email: "", phone: "" })
	const [order, setOrder] = useState({})

	const handleInputChange = e => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		})
		setOrder({
			buyer: { ...user },
			items: cart.map(item => ({ id: item.id, title: item.title, price: item.price, quantity: item.quantity, stock: item.stock })),
			date: new Date(),
			total: total.total,
		})
	}

	const SendOrder = e => {
		e.preventDefault()

		const db = getFirestore()
		const ordersCollection = collection(db, "orders")
		addDoc(ordersCollection, order)
			.then(
				({ id }) =>
					toast(`Orden creada correctamente, su numero de orden es: ${id}`, {
						position: "top-center",
						autoClose: 2000,
						hideProgressBar: true,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
					}),
				order.items.forEach(item => {
					const orderItem = doc(db, "products", item.id)
					updateDoc(orderItem, { stock: item.stock - item.quantity })
				}),
				clear()
			)
			.catch(() => {
				toast(`No se ha podido completar la orden, por favor intentalo nuevamente.`, {
					position: "top-center",
					autoClose: 2000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				})
			})
	}

	return (
		<form onSubmit={SendOrder} className='flex flex-col'>
			<label htmlFor='name'>Nombre:</label>
			<input onChange={handleInputChange} type='text' name='name' id='name' className='border-2' required />
			<label htmlFor='email'>Email:</label>
			<input onChange={handleInputChange} type='email' name='email' id='email' className='border-2' required />
			<label htmlFor='phone'>Telefono:</label>
			<input onChange={handleInputChange} type='number' name='phone' id='phone' className='border-2' required />
			<button type='submit' className='border-2 w-content py-1 px-2 rounded-md mt-4 bg-green-200'>
				Confirmar compra
			</button>
		</form>
	)
}

export default UserForm
