import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer.js"

const App = () => {
	return (
		<>
			<Hero />
			<NavBar />
			<ItemListContainer greeting='En construccion...' />
		</>
	)
}

export default App
