import { useState, useEffect } from "react";
import BallCanvas from "../canvas/Ball";
import { TypingText } from "../components/TypingText";
// import { Tilt } from "react-tilt";
// import { SiHtml5 } from "react-icons/si";

const Skills = () => {
	const [displaySkills, setDisplaySkills] = useState(false);
	const skillData = [
		{
			name: "JavaScript",
			icon: "https://res.cloudinary.com/dvuazircp/image/upload/v1697207416/new_portfolio/javascript_chiohe.webp",
		},
		{
			name: "TypeScript",
			icon: "https://res.cloudinary.com/dvuazircp/image/upload/v1697207412/new_portfolio/typescript_ec1stc.webp",
		},
		{
			name: "Tailwind CSS",
			icon: "https://res.cloudinary.com/dvuazircp/image/upload/v1697207414/new_portfolio/tailwind_kdxzon.webp",
		},
		{
			name: "React JS",
			icon: "https://res.cloudinary.com/dvuazircp/image/upload/v1698658576/new_portfolio/reactjs_gka3u9.webp",
		},
		{
			name: "NextJS",
			icon: "https://res.cloudinary.com/dvuazircp/image/upload/v1698217915/new_portfolio/nextjs_fhg04g.webp",
		},
		{
			name: "Node JS",
			icon: "https://res.cloudinary.com/dvuazircp/image/upload/v1697207412/new_portfolio/nodejs_sr2iw3.webp",
		},
		{
			name: "sql",
			icon: "https://res.cloudinary.com/dvuazircp/image/upload/v1698216902/new_portfolio/postgresql_wystbi.webp",
		},
		{
			name: "Azure",
			icon: "https://res.cloudinary.com/dvuazircp/image/upload/v1720094002/new_portfolio/azure_1_ros5mp.webp",
		},

		{
			name: "git",
			icon: "https://res.cloudinary.com/dvuazircp/image/upload/v1697207415/new_portfolio/git_ls7ndf.webp",
		},
		{
			name: "github",
			icon: "https://res.cloudinary.com/dvuazircp/image/upload/v1698216902/new_portfolio/github2_cgha7l.webp",
		},
		{
			name: "aws",
			icon: "https://res.cloudinary.com/dvuazircp/image/upload/v1698217915/new_portfolio/aws2_gunda5.webp",
		},
		{
			name: "docker",
			icon: "https://res.cloudinary.com/dvuazircp/image/upload/v1697207414/new_portfolio/docker_ncnelj.webp",
		},
	];

	useEffect(() => {
		// Use setTimeout to set displaySkills to true after 5 seconds
		const timeoutId = setTimeout(() => {
			setDisplaySkills(true);
		}, 5000);

		// Clear the timeout if the component unmounts
		return () => clearTimeout(timeoutId);
	}, []);
	return (
		<section className="mt-6 ms-auto me-auto w-[90%]">
			<div className=" flex flex-col justify-center items-center font-medium">
				<TypingText
					title="Skills"
					textStyles="text-2xl mb-4 font-semibold text-center"
				/>
				{/* Conditional rendering when displaySkills is true */}
				{displaySkills && (
					<div className=" flex flex-wrap justify-center items-center gap-10 xl:px-10 2xl:px-40">
						{skillData.map((skill) => (
							<div
								className=" w-28 h-28 flex items-center justify-center flex-wrap"
								key={skill.name}
							>
								<BallCanvas icon={skill.icon} />

								{/* <Tilt className="md:hidden">
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        width="96px"
                                        height="96px"
                                        className="object-contain"
                                    />
                                </Tilt> */}
							</div>
						))}
					</div>
				)}
			</div>
		</section>
	);
};

export default Skills;
