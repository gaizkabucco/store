import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

const NavBar = () => {
	return (
		<nav className='min-h-[60px] border-y border-[rgba(0,0,0,0.15)] sticky flex px-6 items-center justify-center gap-6'>
			<div>
				<ul className='flex gap-2'>
					<Link to={"/"}>
						<li>INICIO</li>
					</Link>
					<Link to={`/category/limpieza`}>
						<li>LIMPIEZA</li>
					</Link>
					<Link to={`/category/accesorios`}>
						<li>ACCESORIOS</li>
					</Link>
				</ul>
			</div>
			<CartWidget />
		</nav>
	)
}

export default NavBar
