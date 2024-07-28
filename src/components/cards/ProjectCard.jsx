import { motion } from "framer-motion";
import { fadeIn } from "../../motion";
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
	github,
	live,
	tech,
	type,
	videoExp,
}) => (
	<motion.div
		variants={fadeIn("right", "spring", index * 0.5, 0.75)}
		className={`relative ${
			active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
		} flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex`}
		onClick={() => handleClick(id)}
	>
		<img
			src={imgUrl}
			alt="project-img"
			className="absolute w-full h-full object-cover rounded-[24px] border border-[#01f53f] border-opacity-30 border-solid"
		/>

		{active !== id ? (
			<h3 className="font-semibold p-[6px] sm:p-2 rounded-2xl sm:text-[24px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0] glassmorphism___card">
				{title}
			</h3>
		) : (
			<>
				{videoExp !== "" && (
					<a
						href={videoExp}
						target="_blank"
						rel="noreferrer"
						aria-label="Live project"
						className="absolute text-sm md:text-base top-0 right-0 p-2 bg-[#138d32] hover:bg-[#145e26] text-white font-medium rounded-bl-[24px] cursor-pointer transition duration-300 ease-in-out"
					>
						Video Explanation
					</a>
				)}
				<div className="absolute bottom-0 px-5 md:px-8 pb-4 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.7)] rounded-b-[24px]">
					<h2 className="font-semibold sm:text-[32px] text-[24px] text-white flex gap-[1px]">
						{title}{" "}
						<span className="sm:text-[16px] text-[12px] font-medium">
							{type}
						</span>
					</h2>

					<p className="font-normal text-[16px] leading-[20.16px] text-white my-4 md:block hidden">
						{desc}
					</p>
					<p className="font-normal text-[16px] leading-[20.16px] text-white my-4 md:hidden block">
						{desc.split(" ").slice(0, 8).join(" ")}
						{desc.split(" ").length > 8 ? "... " : ""}
						<span className=" text-sm italic">
							(click &apos;<span className="font-semibold">More Projects</span>
							&apos; to learn more.)
						</span>
					</p>

					<div className="flex w-full text-[#ffffff] justify-between items-center px-2 h-[65px] glassmorphism rounded-full">
						<button
							disabled={github === "#"}
							onClick={() => window.open(github, "_blank")}
							aria-label="Project on GitHub"
						>
							<IoLogoGithub
								className={`text-5xl hover:scale-110 ${
									github === "#" ? "cursor-not-allowed" : ""
								} transition ease-in-out duration-150 `}
							/>
						</button>

						<span className=" flex flex-wrap gap-[2px] md:gap-1 lg:gap-[6px] justify-center items-center">
							{tech.map((t, index) => (
								<span
									key={index}
									className="text-[#ffffff] text-[14px] font-medium "
								>
									{t}
								</span>
							))}
						</span>
						<a
							href={live}
							target="_blank"
							rel="noreferrer"
							aria-label="Live project"
						>
							<BsFillArrowUpRightCircleFill className="text-5xl hover:scale-110 transition ease-in-out duration-150 have__cursor" />
						</a>
					</div>
				</div>
			</>
		)}
	</motion.div>
);

export default ProjectCard;
