import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import productsJSON from "../products.json"

const ItemListContainer = () => {
	const [products, setProducts] = useState([])

	const getProducts = (data, time) =>
		new Promise((resolve, reject) => {
			setTimeout(() => {
				if (data) {
					resolve(data)
				} else {
					reject("Error")
				}
			}, time)
		})

	useEffect(() => {
		getProducts(productsJSON, 2000)
			.then(res => {
				setProducts(res)
			})
			.catch(err => {
				console.log(err, ": No se encontraron productos")
			})
	}, [])

	return (
		<section className='mt-14 mx-10'>
			<ItemList items={products} />
		</section>
	)
}

export default ItemListContainer
