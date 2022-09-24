import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

const ItemListContainer = () => {
	const params = useParams()
	const [products, setProducts] = useState([])

	const getProducts = category => {
		const db = getFirestore()

		const q =
			Object.keys(category).length === 0 ? collection(db, "products") : query(collection(db, "products"), where("category", "==", category.id))

		getDocs(q)
			.then(snapshot => {
				if (snapshot.size === 0) {
					console.log("No se encontraron productos")
				}
				setProducts(snapshot.docs.map(d => ({ id: d.id, ...d.data() })))
			})
			.catch(err => {
				console.log(err, ": No se encontraron productos")
			})
	}

	useEffect(() => {
		setProducts([])
		getProducts(params)
	}, [params])

	return (
		<section className='mt-14 mx-10'>
			<ItemList items={products} />
		</section>
	)
}

export default ItemListContainer
