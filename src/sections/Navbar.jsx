import { IoColorFill } from "react-icons/io5";

const Navbar = () => {
	return (
		<nav className="m-o fixed z-10 w-[100vw] h-20 flex items-center bg-gradient-to-r from-[#430680] to-[#690cc6] shadow-xl shadow-[#6b22b466] transition ease-in-out">
			<div className=" w-[90%] ms-auto me-auto flex justify-between items-center">
				<a href="#">
					<img
						className=" w-16 "
						src="https://res.cloudinary.com/dvuazircp/image/upload/v1696751220/new_portfolio/mainlogo_ovacwq.webp"
						alt="gateremark"
						width="64px"
						height="68.813px"
					/>
				</a>
				<ul className="w-[70%] md:flex items-center justify-between hidden text-[#FBF2A3] text-xl">
					{/* <li>
						{" "}
						<a href="#">Home</a>
					</li> */}
					<li className=" hover:scale-110 transition ease-in-out duration-150">
						{" "}
						<a href="#About">About Me</a>
					</li>
					<li className=" hover:scale-110 transition ease-in-out duration-150">
						{" "}
						<a href="#Projects">Projects</a>
					</li>
					<li className=" hover:scale-110 transition ease-in-out duration-150">
						{" "}
						<a href="#Work">Work</a>
					</li>
					<li className=" hover:scale-110 transition ease-in-out duration-150">
						{" "}
						<a href="#Blog">Blog</a>
					</li>
					<li className=" hover:scale-110 transition ease-in-out duration-150">
						{" "}
						<a href="#Achievements">Achievements</a>
					</li>
					{/* <li>
						{" "}
						<a href="#Testimonials">Testimonials</a>
					</li> */}
					<li className=" hover:scale-110 transition ease-in-out duration-150">
						{" "}
						<a href="#Contact">Contact</a>
					</li>
				</ul>
				<IoColorFill className="customize text-4xl text-[#FBF2A3] hover:scale-110 transition ease-in-out duration-150" />
			</div>
		</nav>
	);
};

export default Navbar;
