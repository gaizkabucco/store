import Hero from "./components/Hero"
import ItemListContainer from "./components/ItemListContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer"
import Cart from "./components/Cart"
import CartContextProvider from "./context/CartContext"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Footer from "./components/Footer"

const App = () => {
	return (
		<CartContextProvider>
			<BrowserRouter>
				<Hero />
				<Routes>
					<Route path='/' element={<ItemListContainer />} />
					<Route path='/category/:id' element={<ItemListContainer />} />
					<Route path='/item/:id' element={<ItemDetailContainer />} />
					<Route path='/cart' element={<Cart />} />
				</Routes>
				<ToastContainer
					position='top-center'
					autoClose={2000}
					hideProgressBar
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
				<Footer />
			</BrowserRouter>
		</CartContextProvider>
	)
}

export default App
