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
				<a href="#" aria-label="Home">
					<img
						className="w-[85px] hidden md:block"
						src="https://res.cloudinary.com/dvuazircp/image/upload/v1697318467/new_portfolio/logogm_gyayg9.webp"
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
						<a href="#about" aria-label="About Section">
							About Me
						</a>
					</li>
					<li className=" hover:scale-110 transition ease-in-out duration-150">
						{" "}
						<a href="#projects" aria-label="Projects Section">
							Projects
						</a>
					</li>
					<li className=" hover:scale-110 transition ease-in-out duration-150">
						{" "}
						<a href="#work" aria-label="Work Section">
							Work
						</a>
					</li>
					<li className=" hover:scale-110 transition ease-in-out duration-150">
						{" "}
						<a href="#blog" aria-label="Blog Section">
							Blog
						</a>
					</li>
					<li className=" hover:scale-110 transition ease-in-out duration-150">
						{" "}
						<a
							href="#achievements"
							aria-label="Achievements Section"
						>
							Achievements
						</a>
					</li>
					{/* <li>
						{" "}
						<a href="#Testimonials">Testimonials</a>
					</li> */}
					<li className=" hover:scale-110 transition ease-in-out duration-150">
						{" "}
						<a href="#contact" aria-label="Contact Section">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</motion.nav>
	);
};

export default Navbar;
