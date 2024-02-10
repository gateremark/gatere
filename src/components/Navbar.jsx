import { motion } from "framer-motion";
import { navVariants } from "../motion";

const Navbar = () => {
    return (
        <motion.nav
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            className="m-o z-10 w-[100vw] h-16 md:flex items-center transition ease-in-out hidden max-w-[1532px]"
        >
            <div className=" w-[95%] md:w-[90%] ms-auto me-auto flex justify-between items-center">
                <a href="#">
                    <img
                        className="w-20 p-[10px] hidden md:block"
                        src="https://res.cloudinary.com/dvuazircp/image/upload/v1697786446/new_portfolio/gatere_green_abwdom.webp"
                        alt="gateremark"
                        width="56px"
                        height="60.219px"
                    />
                </a>
                <ul className="w-[70%] md:flex items-center justify-around hidden text-[#01f53f] text-xl font-bold">
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
