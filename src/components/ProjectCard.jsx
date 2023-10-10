import { motion } from "framer-motion";
import { fadeIn } from "../motion";
import { IoLogoGithub } from "react-icons/io5";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

const ProjectCard = ({
	id,
	imgUrl,
	title,
	desc,
	index,
	active,
	handleClick,
}) => (
	<motion.div
		variants={fadeIn("right", "spring", index * 0.5, 0.75)}
		className={`relative ${
			active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
		} flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
		onClick={() => handleClick(id)}
	>
		<img
			src={imgUrl}
			alt="planet-04"
			className="absolute w-full h-full object-cover rounded-[24px]"
		/>
		{active !== id ? (
			<h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
				{title}
			</h3>
		) : (
			<div className="absolute bottom-0 p-5 md:p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
				<h2 className="font-semibold sm:text-[32px] text-[24px] text-white">
					{title}
				</h2>

				<p className="font-normal text-[16px] leading-[20.16px] text-white my-4">
					{desc}
				</p>

				<div className="flex w-full text-[#ffffff] justify-between items-center h-[60px] glassmorphism">
					<a
						href="https://github.com/gateremark"
						target="_blank"
						rel="noreferrer"
					>
						<IoLogoGithub className="text-5xl" />
					</a>
					<a
						href="https://twitter.com/gatere_mark"
						target="_blank"
						rel="noreferrer"
					>
						<BsFillArrowUpRightCircleFill className="text-5xl" />
					</a>
				</div>
			</div>
		)}
	</motion.div>
);

export default ProjectCard;
