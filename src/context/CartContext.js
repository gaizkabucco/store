import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([])

	const isInCart = item => {
		return cart.some(cartItem => cartItem.id === item.id)
	}

	const AddItem = (item, quantity) => {
		if (isInCart(item)) {
			const cartCopy = [...cart]
			const existingItem = cartCopy.find(cartItem => cartItem.id === item.id)
			const wantedTotal = existingItem.quantity + quantity
			wantedTotal <= item.stock ? (existingItem.quantity += quantity) : (existingItem.quantity = item.stock)
			return setCart(cartCopy)
		}

		const itemToAdd = { ...item, quantity }
		setCart(prev => prev.concat(itemToAdd))
	}

	const removeItem = item => {
		const itemsToKeep = cart.filter(itemToRemove => itemToRemove.id !== item.id)
		setCart(itemsToKeep)
	}

	const clear = () => {
		setCart([])
	}

	const cartTotal = () => {
		let total = 0
		for (const item of cart) {
			total = total + item.quantity
		}
		return total
	}

	return <CartContext.Provider value={{ cart, isInCart, AddItem, removeItem, clear, cartTotal }}>{children}</CartContext.Provider>
}

export default CartContextProvider
