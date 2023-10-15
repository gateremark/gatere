import { motion } from "framer-motion";
import { navVariants } from "../motion";

const Navbar = () => {
	return (
		<motion.nav
			variants={navVariants}
			initial="hidden"
			whileInView="show"
			className="m-o z-10 w-[100vw] h-16 flex items-center transition ease-in-out"
		>
			<div className=" w-[95%] md:w-[90%] ms-auto me-auto flex justify-between items-center">
				<a href="#">
					<img
						className="w-20 p-[10px] hidden md:block"
						src="https://res.cloudinary.com/dvuazircp/image/upload/v1697410111/new_portfolio/gatere_purple_n4o6be.webp"
						alt="gateremark"
						width="56px"
						height="60.219px"
					/>
					<img
						className="w-64 md:hidden"
						src="https://res.cloudinary.com/dvuazircp/image/upload/v1697318468/new_portfolio/logogm2_hid3vb.webp"
						alt="gateremark"
						width="860px"
						height="142px"
					/>
				</a>
				<ul className="w-[70%] md:flex items-center justify-around hidden text-[#430680] text-xl font-bold">
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
			</div>
		</motion.nav>
	);
};

export default Navbar;
