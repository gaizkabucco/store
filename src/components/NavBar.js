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
			<div className='flex gap-2'>
				<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
					<path d='M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z'></path>
				</svg>
				<CartWidget />
			</div>
		</nav>
	)
}

export default NavBar
