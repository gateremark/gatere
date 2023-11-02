import BallCanvas from "../canvas/Ball";
import { TypingText } from "../components/TypingText";

const Skills = () => {
	const skillData = [
		{
			name: "HTML 5",
			icon: "https://res.cloudinary.com/dvuazircp/image/upload/v1697207416/new_portfolio/html_ge46fk.webp",
		},
		{
			name: "CSS 3",
			icon: "https://res.cloudinary.com/dvuazircp/image/upload/v1697207416/new_portfolio/css_a9sl6h.webp",
		},
		{
			name: "JavaScript",
			icon: "https://res.cloudinary.com/dvuazircp/image/upload/v1697207416/new_portfolio/javascript_chiohe.webp",
		},
		{
			name: "TypeScript",
			icon: "https://res.cloudinary.com/dvuazircp/image/upload/v1697207412/new_portfolio/typescript_ec1stc.webp",
		},
		{
			name: "React JS",
			icon: "https://res.cloudinary.com/dvuazircp/image/upload/v1698658576/new_portfolio/reactjs_gka3u9.webp",
		},
		{
			name: "Redux Toolkit",
			icon: "https://res.cloudinary.com/dvuazircp/image/upload/v1697207415/new_portfolio/redux_a5azs9.webp",
		},
		{
			name: "Tailwind CSS",
			icon: "https://res.cloudinary.com/dvuazircp/image/upload/v1697207414/new_portfolio/tailwind_kdxzon.webp",
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
			name: "MongoDB",
			icon: "https://res.cloudinary.com/dvuazircp/image/upload/v1697207416/new_portfolio/mongodb_a4wsue.webp",
		},
		{
			name: "sql",
			icon: "https://res.cloudinary.com/dvuazircp/image/upload/v1698216903/new_portfolio/mysql_p0oszl.webp",
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
			name: "graphql",
			icon: "https://res.cloudinary.com/dvuazircp/image/upload/v1698217916/new_portfolio/graphql_wbq5go.webp",
		},
		{
			name: "docker",
			icon: "https://res.cloudinary.com/dvuazircp/image/upload/v1697207414/new_portfolio/docker_ncnelj.webp",
		},
	];
	return (
		<section className="mt-6 ms-auto me-auto w-[90%]">
			<div className=" flex flex-col justify-center items-center font-medium">
				<TypingText
					title="Skills"
					textStyles="text-2xl mb-4 font-semibold text-center"
				/>
				<div className=" flex flex-wrap justify-center items-center gap-10">
					{skillData.map((skill) => (
						<div className="w-28 h-28" key={skill.name}>
							<BallCanvas icon={skill.icon} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
