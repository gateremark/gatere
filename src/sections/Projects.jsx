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
			imgUrl:
				"https://res.cloudinary.com/dvuazircp/image/upload/v1697206829/plan1_as9lz6.webp",
			title: "Jambo Chat",
			desc: "A comprehensive and user‐friendly web platform designed to connect prospective homeowners, tenants, and real estate professionals with their perfect housing solutions.",
			github: "https://github.com/gateremark",
			live: "https://github.com/gateremark",
		},
		{
			id: "proj-2",
			imgUrl:
				"https://res.cloudinary.com/dvuazircp/image/upload/v1697207197/plan2_forovj.webp",
			title: "Tubonge",
			desc: "A comprehensive and user‐friendly web platform designed to connect prospective homeowners, tenants, and real estate professionals with their perfect housing solutions.",
			github: "https://github.com/gateremark",
			live: "https://github.com/gateremark",
		},
		{
			id: "proj-3",
			imgUrl:
				"https://res.cloudinary.com/dvuazircp/image/upload/v1697207195/plan3_sjiki7.webp",
			title: "StoryScribe",
			desc: "A comprehensive and user‐friendly web platform designed to connect prospective homeowners, tenants, and real estate professionals with their perfect housing solutions.",
			github: "https://github.com/gateremark",
			live: "https://github.com/gateremark",
		},
		{
			id: "proj-4",
			imgUrl:
				"https://res.cloudinary.com/dvuazircp/image/upload/v1697207025/plan4_tuiyjj.webp",
			title: "Pixagram",
			desc: "A comprehensive and user‐friendly web platform designed to connect prospective homeowners, tenants, and real estate professionals with their perfect housing solutions.",
			github: "https://github.com/gateremark",
			live: "https://github.com/gateremark",
		},
		{
			id: "proj-5",
			imgUrl:
				"https://res.cloudinary.com/dvuazircp/image/upload/v1697207036/plan5_pkbwsu.webp",
			title: "NetClips",
			desc: "A comprehensive and user‐friendly web platform designed to connect prospective homeowners, tenants, and real estate professionals with their perfect housing solutions.",
			github: "https://github.com/gateremark",
			live: "https://github.com/gateremark",
		},
	];

	const [active, setActive] = useState("proj-2");
	return (
		<motion.div
			id="projects"
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.1 }}
			className="ms-auto me-auto w-[95%] md:w-full"
		>
			<div className="pt-16 flex flex-col justify-center items-center font-medium">
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
					aria-label="More projects"
				>
					<BsFillArrowUpRightCircleFill />
					<TypingText title="More Projects" textStyles="" />
				</a>
			</div>
		</motion.div>
	);
};

export default Projects;
