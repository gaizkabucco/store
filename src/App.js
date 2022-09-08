import Hero from "./components/Hero"
import ItemCount from "./components/ItemCount"

const App = () => {
	return (
		<>
			<Hero />
			<ItemCount stock={5} initial={1} />
		</>
	)
}

export default App
