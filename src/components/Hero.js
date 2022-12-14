import { Link } from "react-router-dom"
import NavBar from "./NavBar"

const Hero = () => {
	return (
		<>
			<header className='flex justify-center items-center min-h-[175px]'>
				<Link to={"/"}>
					<img
						src='https://d22fxaf9t8d39k.cloudfront.net/9e4d66ee07c6c7f96d7ac3b1551a77e6eb5fa995cd32f8380ce4f5a814293e5d48488.jpeg'
						alt='bamboo logo'
						srcSet=''
						className='max-h-[120px]'
					/>
				</Link>
			</header>
			<NavBar />
		</>
	)
}

export default Hero
