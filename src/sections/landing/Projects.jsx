import { useState } from "react";
import { motion } from "framer-motion";
import { TypingText } from "../../components/animationtext/TypingText";
import ProjectCard from "../../components/cards/ProjectCard";
import { staggerContainer } from "../../motion";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
// import testimg from "../assets/testimg.png";
import { Link } from "react-router-dom";

const Projects = () => {
	const projectData = [
		{
			id: "proj-1",
			imgUrl:
				"https://res.cloudinary.com/dvuazircp/image/upload/v1713443790/new_portfolio/new_proj_images/expo2_tt90ia.webp",
			title: "Expo Africa",
			desc: "A responsive web application, for the East Africa Real Estate Expo 2024, with payment integration catering to both Kenyan mobile users (Mpesa) and international users (Card).",
			github: "#",
			live: "https://www.expoafrica.co.ke/",
			tech: [
				"Next.js,",
				"TailwindCSS,",
				"Paystack,",
				"Framermotion,",
				"NeonDB",
			],
			type: "(Client's)",
		},
		{
			id: "proj-2",
			imgUrl:
				"https://res.cloudinary.com/dvuazircp/image/upload/v1720094948/new_portfolio/_a4af2359-96b0-4421-9c5b-2456ef73e227_y8vle4.webp",
			title: "MasomoNet",
			desc: " An e-learning platform that provides a comprehensive revision materials for students across various academic levels, from Competency-Based Curriculum (CBC) to University level.",
			github: "#",
			live: "https://masomonet-prod.vercel.app/",
			tech: [
				"Next.js,",
				"TailwindCSS,",
				"AWS,",
				"Supabase,",
				"Paystack,",
				"Node.js",
			],
			type: "(Client's)",
		},
		{
			id: "proj-3",
			imgUrl:
				"https://res.cloudinary.com/dvuazircp/image/upload/v1713443790/new_portfolio/new_proj_images/ahaditek2_ow8cob.webp",
			title: "Ahadi-Tek",
			desc: "A responsive web application for Ahadi-Tek, an innovative tech startup behind Digi-Kodi; Simplifying Property Management.",
			github: "#",
			live: "https://ahaditek.com/",
			tech: ["React.js,", "TailwindCSS,", "Firebase,", "React Parallax"],
			type: "(Client's)",
		},
		{
			id: "proj-4",
			imgUrl:
				"https://res.cloudinary.com/dvuazircp/image/upload/v1713639786/new_portfolio/nanaai_wmogea.webp",
			title: "nanaAI",
			desc: "An AI-powered SaaS web application that enables users to interact with PDFs, and online blogs using voice commands.",
			github: "#",
			live: "https://nana-ai.vercel.app/",
			tech: [
				"Next.js,",
				"TailwindCSS,",
				"AWS,",
				"Langchain,",
				"Deepgram,",
				"Elevenlabs API",
			],
			type: "",
		},
		{
			id: "proj-5",
			imgUrl:
				"https://res.cloudinary.com/dvuazircp/image/upload/v1703109021/new_portfolio/blog_rwxm7q.webp",
			title: "BlogBox",
			desc: "Offering an intuitive and collaborative space for crafting and sharing insightful technical blogs; with AI-powered autocompletions, and real-time collaboration.",
			github: "https://github.com/gateremark/blogbox",
			live: "https://myblogbox.vercel.app/",
			tech: [
				"Next.js,",
				"TailwindCSS,",
				"OpenAI API,",
				"NeonDB,",
				"Drizzle ORM,",
				"Y-WebRTC",
			],
			type: "",
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
			className="ms-auto me-auto w-[95%] md:w-full text-slate-200"
		>
			<div className="pt-16 flex flex-col justify-center items-center font-medium">
				<TypingText
					title="| Projects"
					textStyles="text-4xl mb-10 font-semibold"
				/>
				<div className="w-[90%] 2xl:w-[85%] flex lg:flex-row flex-col min-h-[70vh] gap-5">
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
				<Link
					to="/projects"
					className="flex flex-col justify-center items-center mt-10 text-xl font-semibold hover:scale-110 transition ease-in-out duration-200"
				>
					<BsFillArrowUpRightCircleFill />
					<TypingText title="More Projects" textStyles="" />
				</Link>
			</div>
		</motion.div>
	);
};

export default Projects;
