import { useState, useEffect } from "react"
import ItemList from "./ItemList"

const ItemListContainer = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		setTimeout(() => {
			getProducts()
		}, 2000)
	}, [])

	const getProducts = () => {
		const URL = "/products.json"

		fetch(URL)
			.then(response => response.json())
			.then(data => {
				setProducts(data)
			})
	}

	return (
		<div className='mt-14 mx-10'>
			<ItemList items={products} />
		</div>
	)
}

export default ItemListContainer
