/* eslint-disable react/no-unescaped-entities */
import Cta from "../components/CTA";
import { IoLogoGithub, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io5";
import { AiOutlineSwap } from "react-icons/ai";
import { FaAnglesDown } from "react-icons/fa6";
import { motion } from "framer-motion";

const Header = () => {
	return (
		<motion.div
			id="#"
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 30 }}
			transition={{ duration: 3 }}
			className="pt-[2rem] ms-auto me-auto w-[95%] md:w-full"
		>
			<div className="flex flex-col justify-center items-center font-medium mb-6">
				<h5 className=" text-base md:text-lg mb-2">Hello, I'm</h5>
				<h1 className=" text-4xl  md:text-6xl mb-2 head">Mark Gatere</h1>
				<h5 className=" text-base mb:text-lg mb-3">Frontend Developer</h5>
				<Cta />
			</div>
			<div className="flex justify-evenly md:justify-around items-end">
				<div className=" flex flex-col gap-4 text-[#690cc6] text-sm md:text-xl justify-center items-center mb-0 md:mb-6">
					<a
						href="https://www.linkedin.com/in/gateremark/"
						target="_blank"
						rel="noreferrer"
					>
						<IoLogoLinkedin />
					</a>
					<a
						href="https://twitter.com/gatere_mark"
						target="_blank"
						rel="noreferrer"
					>
						<IoLogoTwitter />
					</a>
					<a
						href="https://github.com/gateremark"
						target="_blank"
						rel="noreferrer"
					>
						<IoLogoGithub />
					</a>
					<AiOutlineSwap className=" rotate-90 h-15 text-4xl text-[#30144d]" />
				</div>
				<img
					className=" w-52 md:w-72 bg-gradient-to-b from-[#690cc6] to-[#690cc600] rounded-t-full pt-12 px-2 md:pt-14"
					src="https://res.cloudinary.com/dvuazircp/image/upload/v1696751292/new_portfolio/myself_ovbc7w.webp"
					alt="Mark Gatere"
					width="288px"
					height="315px"
				/>
				{/* <a
					href="#About"
					className=" hidden md:block rotate-90 text-sm md:text-lg md:mb-12 text-[#30144d]"
				>
					Scroll Down
				</a> */}
				<a
					href="#about"
					className=" animate-bounce text-2xl md:text-3xl text-[#30144d] mb-0 md:mb-10"
				>
					<FaAnglesDown />
				</a>
			</div>
		</motion.div>
	);
};

export default Header;
