import { IoColorFill } from "react-icons/io5";
import MG from "../assets/mglogo.png";

const Navbar = () => {
	return (
		<nav className="m-o fixed z-10 w-[100vw] h-20 flex items-center bg-gradient-to-r from-[#430680] to-[#690cc6] shadow-xl shadow-[#6b22b466] transition ease-in-out">
			<div className=" w-[90%] ms-auto me-auto flex justify-between items-center">
				<a href="#">
					<img className="w-20 " src={MG} alt="gateremark" />
				</a>
				<ul className="w-[70%] md:flex items-center justify-between hidden text-[#fff] text-xl">
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
				<IoColorFill className="customize text-4xl text-[#ffffff] hover:scale-110 transition ease-in-out duration-150" />
			</div>
		</nav>
	);
};

export default Navbar;
