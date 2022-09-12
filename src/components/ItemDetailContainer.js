import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import productsJSON from "../products.json"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
	const params = useParams()
	const [item, setItem] = useState()

	const getItem = (data, time) =>
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
		getItem(productsJSON, 2000)
			.then(res => {
				const response = res.find(elem => elem.id === params.id)
				setItem(response)
			})
			.catch(err => {
				console.log(err, ": Producto")
			})
	}, [params])

	return (
		<section className='mt-14 mx-10'>
			<ItemDetail item={item} />
		</section>
	)
}

export default ItemDetailContainer
