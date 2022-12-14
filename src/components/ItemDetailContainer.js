import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
// import productsJSON from "../products.json"
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore } from "firebase/firestore"

const ItemDetailContainer = () => {
	const params = useParams()
	const [item, setItem] = useState()

	const getItem = id => {
		const db = getFirestore()

		const itemRef = doc(db, "products", id.id)

		getDoc(itemRef)
			.then(snapshot => {
				if (!snapshot.exists()) {
					console.log("Producto no encontrado")
				}
				setItem({ id: snapshot.id, ...snapshot.data() })
			})
			.catch(err => {
				console.log(err, ": Producto")
			})
	}

	useEffect(() => {
		setItem([])
		getItem(params)
	}, [params])

	return (
		<section className='mt-14 mx-10'>
			<ItemDetail item={item} />
		</section>
	)
}

export default ItemDetailContainer
