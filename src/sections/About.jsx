import { FaAnglesDown } from "react-icons/fa6";
import data from "../components/AboutData";
import Card from "../components/AboutCard";
import Skills from "./Skills";

const About = () => {
	return (
		<section id="About" className="ms-auto me-auto md:w-full">
			<div className=" pt-28 flex flex-col justify-center items-center font-medium">
				<div className="md:flex justify-between w-[90%] md:w-[90%] lg:w-[75%]">
					<div className="w-48 hidden md:w-72 py-[0.3rem] aspect-square rounded-[2rem] bg-gradient-to-tr from-[#690cc600] via-[#430680] to-[#690cc600] hover:bg-[#430680] transition ease-in-out duration-[500ms] md:flex items-center justify-center">
						<img
							className="w-48 md:w-72 rounded-[2rem] overflow-hidden rotate-[10deg] hover:rotate-0 transition ease-in-out duration-500"
							src="/gmark.jpg"
							alt="Mark Gatere"
						/>
					</div>

					<div className=" flex flex-col justify-between items-center md:items-start">
						<h2 className="text-3xl md:text-4xl font-semibold">About Me</h2>
						<div className="md:hidden w-48 py-1 mt-5 md:my-5 md:w-72 aspect-square rounded-[2rem] bg-gradient-to-tr from-[#690cc600] via-[#430680] to-[#690cc600] hover:bg-[#430680] transition ease-in-out duration-[500ms] flex items-center justify-center">
							<img
								className="w-48 md:w-72 rounded-[2rem] overflow-hidden rotate-[10deg] hover:rotate-0 transition ease-in-out duration-500"
								src="https://firebasestorage.googleapis.com/v0/b/hometopia-d224f.appspot.com/o/gmark.jpg?alt=media&token=6ebc1bfb-dc21-4cef-8e79-5984e25361a5"
								alt="Mark Gatere"
							/>
						</div>
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
							• Experienced in blending the art of design with <br /> the skill
							of programming to deliver immersive and <br /> engaging user
							experiences.
						</p>
						<p className="text-center md:text-left">
							• Strong proficiency in JavaScript and a thorough <br />{" "}
							understanding of ReactJS and its core principles.
						</p>

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
		</section>
	);
};

export default About;
