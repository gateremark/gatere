import { useState } from "react";
import { motion } from "framer-motion";
import { TypingText } from "../components/TypingText";
import ProjectCard from "../components/ProjectCard";
import { staggerContainer } from "../motion";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

const Projects = () => {
	const projectData = [
		{
			id: "proj-1",
			imgUrl: "plan1.png",
			title: "Jambo Chat",
			desc: "A comprehensive and user‐friendly web platform designed to connect prospective homeowners, tenants, and real estate professionals with their perfect housing solutions.",
		},
		{
			id: "proj-2",
			imgUrl: "plan2.png",
			title: "Tuongee",
			desc: "A comprehensive and user‐friendly web platform designed to connect prospective homeowners, tenants, and real estate professionals with their perfect housing solutions.",
		},
		{
			id: "proj-3",
			imgUrl: "plan3.png",
			title: "Hashnerd",
			desc: "A comprehensive and user‐friendly web platform designed to connect prospective homeowners, tenants, and real estate professionals with their perfect housing solutions.",
		},
		{
			id: "proj-4",
			imgUrl: "plan4.png",
			title: "Instagroove",
			desc: "A comprehensive and user‐friendly web platform designed to connect prospective homeowners, tenants, and real estate professionals with their perfect housing solutions.",
		},
		{
			id: "proj-5",
			imgUrl: "plan5.png",
			title: "Netclips",
			desc: "A comprehensive and user‐friendly web platform designed to connect prospective homeowners, tenants, and real estate professionals with their perfect housing solutions.",
		},
	];

	const [active, setActive] = useState("proj-2");
	return (
		<motion.div
			id="Projects"
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className="ms-auto me-auto w-[95%] md:w-full"
		>
			<div className="pt-28 flex flex-col justify-center items-center font-medium">
				<TypingText
					title="| Projects"
					textStyles="text-4xl mb-10 font-semibold"
				/>
				<div className="w-[90%] flex lg:flex-row flex-col min-h-[70vh] gap-5">
					{projectData.map((proj, index) => (
						<ProjectCard
							key={proj.id}
							{...proj}
							index={index}
							active={active}
							handleClick={setActive}
						/>
					))}
				</div>
				<a
					href="https://github.com/gateremark"
					target="_blank"
					rel="noreferrer"
					className="flex flex-col justify-center items-center mt-10 text-xl font-semibold hover:scale-110 transition ease-in-out duration-200"
				>
					<BsFillArrowUpRightCircleFill />
					<TypingText title="More Projects" textStyles="" />
				</a>
			</div>
		</motion.div>
	);
};

export default Projects;
