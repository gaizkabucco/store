import Hero from "./components/Hero"
import ItemListContainer from "./components/ItemListContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Cart from "./components/Cart"

const App = () => {
	return (
		<BrowserRouter>
			<Hero />
			<Routes>
				<Route path='/' element={<ItemListContainer />} />
				<Route path='/category/:id' element={<ItemListContainer />} />
				<Route path='/item/:id' element={<ItemDetailContainer />} />
				<Route path='/cart' element={<Cart />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
