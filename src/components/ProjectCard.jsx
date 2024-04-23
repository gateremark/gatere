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
    github,
    live,
    tech,
    type,
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
            <div className="absolute bottom-0 px-5 md:px-8 pb-4 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.7)] rounded-b-[24px]">
                <h2 className="font-semibold sm:text-[32px] text-[24px] text-white flex gap-[1px]">
                    {title}{" "}
                    <span className="sm:text-[16px] text-[16px]">{type}</span>
                </h2>

                <p className="font-normal text-[16px] leading-[20.16px] text-white my-4">
                    {desc}
                </p>

                <div className="flex w-full text-[#ffffff] justify-between items-center px-2 h-[65px] glassmorphism rounded-full">
                    {/* <a
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Project on GitHub"
                        disabled={github === "#"}
                    > */}
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

                    {/* </a> */}
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
        )}
    </motion.div>
);

export default ProjectCard;
