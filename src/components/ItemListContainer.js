import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import productsJSON from "../products.json"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
	const params = useParams()
	const [products, setProducts] = useState([])
	const [url, setUrl] = useState([])

	useEffect(() => {
		if (url !== params) {
			setUrl(params)
			setProducts([])
		}
	}, [params, url])

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
				if (Object.keys(params).length === 0) {
					setProducts(res)
				} else {
					setProducts(res.filter(results => results.category === params.id))
				}
			})
			.catch(err => {
				console.log(err, ": No se encontraron productos")
			})
	}, [params])

	return (
		<section className='mt-14 mx-10'>
			<ItemList items={products} />
		</section>
	)
}

export default ItemListContainer
