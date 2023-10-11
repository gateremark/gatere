import { FaAnglesDown } from "react-icons/fa6";
import data from "../components/AboutData";
import Card from "../components/AboutCard";
import Skills from "./Skills";
import { motion } from "framer-motion";
import { TypingText } from "../components/TypingText";
import { fadeIn, staggerContainer } from "../motion";

const About = () => {
	return (
		<motion.div
			id="About"
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.1 }}
			className="ms-auto me-auto md:w-full"
		>
			<div className=" pt-28 flex flex-col justify-center items-center font-medium">
				<div className="md:flex justify-between w-[90%] md:w-[90%] lg:w-[75%]">
					<div className="w-48 hidden md:w-72 py-[0.3rem] aspect-square rounded-[2rem] bg-gradient-to-tr from-[#690cc600] via-[#430680] to-[#690cc600] hover:bg-[#430680] transition ease-in-out duration-[500ms] md:flex items-center justify-center">
						<img
							className="w-48 bg-[#430680] md:w-72 rounded-[2rem] overflow-hidden rotate-[10deg] hover:rotate-0 transition ease-in-out duration-500"
							src="https://res.cloudinary.com/dvuazircp/image/upload/v1696751252/new_portfolio/gmark_j4ggfo.webp"
							alt="Mark Gatere"
							width="288px"
							height="438.922px"
						/>
					</div>

					<div className=" flex flex-col justify-between items-center md:items-start">
						<TypingText
							title="About Me"
							textStyles="text-3xl md:text-4xl font-semibold "
						/>
						<div className="md:hidden w-48 py-1 mt-5 md:my-5 md:w-72 aspect-square rounded-[2rem] bg-gradient-to-tr from-[#690cc600] via-[#430680] to-[#690cc600] hover:bg-[#430680] transition ease-in-out duration-[500ms] flex items-center justify-center">
							<img
								className="w-48 bg-[#430680] md:w-72 rounded-[2rem] overflow-hidden rotate-[10deg] hover:rotate-0 transition ease-in-out duration-500"
								src="https://res.cloudinary.com/dvuazircp/image/upload/v1696751252/new_portfolio/gmark_j4ggfo.webp"
								alt="Mark Gatere"
								width="288px"
								height="438.922px"
							/>
						</div>
						<motion.div variants={fadeIn("tween", 0.2, 0.7)}>
							<div className=" my-2 grid grid-cols-2 gap-5 justify-between items-center">
								{data.map((item) => (
									<Card key={item.id} className="">
										<i className=" text-[20px] md:text-[40px] text-[#690cc6]">
											{item.icon}
										</i>
										<h5 className=" text-[13px] md:text-[15px] text-center">
											{item.title}
										</h5>
									</Card>
								))}
							</div>

							<p className="mb-2 text-center md:text-left">
								• Experienced in blending the art of design with <br /> the
								skill of programming to deliver immersive and <br /> engaging
								user experiences.
							</p>
							<p className="text-center md:text-left">
								• Strong proficiency in <strong>JavaScript</strong> and a
								thorough <br /> understanding of <strong>ReactJS</strong> and
								its core principles.
							</p>
						</motion.div>

						<a
							className=" mt-4 w-fit flex justify-center gap-2 items-center text-sm md:text-lg text-[#fff] bg-[#690cc6] px-2 py-2 md:py-2 br border-[#690cc6] rounded-md hover:bg-[#380d63] transition ease-in-out duration-500 "
							href="#Projects"
						>
							My Work <FaAnglesDown />
						</a>
					</div>
				</div>
			</div>
			<Skills />
		</motion.div>
	);
};

export default About;
