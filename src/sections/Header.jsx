import CTA from "../components/CTA";
import { IoLogoGithub, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io5";
import { AiOutlineSwap } from "react-icons/ai";

const Header = () => {
	return (
		<header className="pt-28 ms-auto me-auto">
			<div className="flex flex-col justify-center items-center font-medium mb-6">
				<h5 className=" text-lg mb-2">Hello, I'm</h5>
				<h1 className=" text-6xl mb-2">Mark Gatere</h1>
				<h5 className=" text-lg mb-3">Frontend Developer</h5>
				<CTA />
			</div>
			<div className="flex justify-around items-end">
				<div className=" flex flex-col gap-4 text-[#690cc6] text-lg justify-center items-center mr-20 pb-2">
					<a href="">
						<IoLogoLinkedin />
					</a>
					<a href="">
						<IoLogoTwitter />
					</a>
					<a href="">
						<IoLogoGithub />
					</a>
					<AiOutlineSwap className=" rotate-90 h-15 text-4xl text-[#30144d]" />
				</div>
				<img
					className=" w-72 bg-gradient-to-b from-[#690cc6] to-[#690cc600] rounded-t-full pt-16 px-6 pb-2"
					src="/me_icon.png"
					alt="Mark Gatere"
				/>
				<a href="#About" className="right-10 rotate-90 mb-12 text-[#30144d]">
					Scroll Down
				</a>
			</div>
		</header>
	);
};

export default Header;
