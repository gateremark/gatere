import { IoColorFill } from "react-icons/io5";
import { motion } from "framer-motion";
import { navVariants } from "../motion";

const Navbar = () => {
	return (
		<motion.nav
			variants={navVariants}
			initial="hidden"
			whileInView="show"
			className="m-o z-10 w-[100vw] h-16 flex items-center bg-gradient-to-r from-[#430680] to-[#690cc6] shadow-xl shadow-[#6b22b466] transition ease-in-out"
		>
			<div className=" w-[95%] md:w-[90%] ms-auto me-auto flex justify-between items-center">
				<a href="#">
					<img
						className="w-[85px] hidden md:block"
						src="https://res.cloudinary.com/dvuazircp/image/upload/v1697058396/new_portfolio/gatlogo_cvz9ve.webp"
						alt="gateremark"
						width="56px"
						height="60.219px"
					/>
					<img
						className="w-48 md:hidden"
						src="https://res.cloudinary.com/dvuazircp/image/upload/v1697058420/new_portfolio/gatlogo1_gazfcb.webp"
						alt="gateremark"
						width="56px"
						height="60.219px"
					/>
				</a>
				<ul className="w-[60%] md:flex items-center justify-between hidden text-[#ffffff] text-xl">
					{/* <li>
						{" "}
						<a href="#">Home</a>
					</li> */}
					<li className=" hover:scale-110 transition ease-in-out duration-150">
						{" "}
						<a href="#about">About Me</a>
					</li>
					<li className=" hover:scale-110 transition ease-in-out duration-150">
						{" "}
						<a href="#projects">Projects</a>
					</li>
					<li className=" hover:scale-110 transition ease-in-out duration-150">
						{" "}
						<a href="#work">Work</a>
					</li>
					<li className=" hover:scale-110 transition ease-in-out duration-150">
						{" "}
						<a href="#blog">Blog</a>
					</li>
					<li className=" hover:scale-110 transition ease-in-out duration-150">
						{" "}
						<a href="#achievements">Achievements</a>
					</li>
					{/* <li>
						{" "}
						<a href="#Testimonials">Testimonials</a>
					</li> */}
					<li className=" hover:scale-110 transition ease-in-out duration-150">
						{" "}
						<a href="#contact">Contact</a>
					</li>
				</ul>
				<IoColorFill className="customize text-4xl text-[#ffffff] hover:scale-110 transition ease-in-out duration-150" />
			</div>
		</motion.nav>
	);
};

export default Navbar;
