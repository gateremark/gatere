import { useState } from "react";
import { motion } from "framer-motion";
import { TypingText } from "../components/TypingText";
import ProjectCard from "../components/ProjectCard";
import { staggerContainer } from "../motion";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
// import testimg from "../assets/testimg.png";
import { Link } from "react-router-dom";

const Projects = () => {
    const projectData = [
        {
            id: "proj-1",
            imgUrl: "https://res.cloudinary.com/dvuazircp/image/upload/v1703109021/new_portfolio/blog_rwxm7q.webp",
            title: "BlogBox",
            desc: "Offering an intuitive and collaborative space for crafting and sharing insightful technical blogs; with AI-powered autocompletions.",
            github: "https://github.com/gateremark/blogbox",
            live: "https://myblogbox.vercel.app/",
            tech: [
                "NextJS,",
                "TailwindCSS,",
                "OpenAI API,",
                "NeonDB,",
                "Drizzle ORM,",
                "Next Auth",
            ],
        },
        {
            id: "proj-2",
            imgUrl: "https://res.cloudinary.com/dvuazircp/image/upload/v1703109021/new_portfolio/home_vm6hdd.webp",
            title: "HomeTopia",
            desc: "Designed to connect prospective homeowners, tenants, and real estate professionals with their perfect housing solutions.",
            github: "https://github.com/gateremark/hometopia",
            live: "https://hometopia.vercel.app/",
            tech: [
                "React,",
                "TailwindCSS,",
                "Firebase,",
                "SwiperJS,",
                "Leaflet",
            ],
        },
        {
            id: "proj-3",
            imgUrl: "https://res.cloudinary.com/dvuazircp/image/upload/v1703109022/new_portfolio/bot_pyp3fk.webp",
            title: "gaterebot",
            desc: "Leveraging advanced natural language processing techniques to provide users with an interactive conversational experience.",
            github: "https://github.com/gateremark/gaterebot",
            live: "https://gaterebot.vercel.app/",
            tech: [
                "NextJS,",
                "TailwindCSS,",
                "OpenAI API,",
                "MongoDB,",
                "Next Auth",
            ],
        },
        {
            id: "proj-4",
            imgUrl: "https://res.cloudinary.com/dvuazircp/image/upload/v1703109021/new_portfolio/maps2_ezsfin.webp",
            title: "Gatere Maps",
            desc: "A Google Maps‐inspired project, allowing users to explore interactive maps, and search for locations using a built‐in search feature.",
            github: "https://github.com/gateremark/google_maps_clone",
            live: "https://gateremaps.vercel.app/",
            tech: ["React,", "TailwindCSS,", "Maps API,", "GeoCoding API"],
        },
        {
            id: "proj-5",
            imgUrl: "https://res.cloudinary.com/dvuazircp/image/upload/v1703109021/new_portfolio/movie_dwo2xb.webp",
            title: "FilMere",
            desc: "A movie app utilizing the TMDB API to fetch movie data and provides a user-friendly interface for users to browse and explore various movies.",
            github: "https://github.com/gateremark/FilMere",
            live: "https://gateremark.github.io/FilMere/",
            tech: ["HTML,", "CSS,", "JavaScript,", "TMDB API"],
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
            className="ms-auto me-auto w-[95%] md:w-full text-slate-800"
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
                    <TypingText title="All Projects" textStyles="" />
                </Link>
            </div>
        </motion.div>
    );
};

export default Projects;
