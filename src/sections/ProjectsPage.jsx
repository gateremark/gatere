import { motion } from "framer-motion";
import { useEffect } from "react";
import { TypingText } from "../components/TypingText";
import { staggerContainer } from "../motion";
import { Link } from "react-router-dom";
import { GiReturnArrow } from "react-icons/gi";
import StarsCanvas from "../canvas/Stars";
import { projsData } from "../components/ProjsData";
import AllProjCard from "../components/AllProjCard";
import SpringyText from "../components/springtext/SpringyText";

const ProjectsPage = () => {
    useEffect(() => {
        // Scroll to the top of the page when the component is mounted
        window.scrollTo(0, 0);
    }, []);
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="ms-auto me-auto w-[95%] md:w-full pb-10 h-fit text-slate-200 max-w-[1532px]"
        >
            <Link
                to="/"
                className="flex absolute justify-center items-center text-[#01f53f] top-5 md:top-10 left-5 md:left-20 gap-3 hover:scale-110 transition ease-in-out duration-200"
            >
                <GiReturnArrow className="text-xl sm:text-3xl md:text-5xl" />
                <span className="text-xl sm:text-2xl md:text-4xl ">Home</span>
            </Link>
            <div className="pt-16 flex flex-col justify-center items-center font-medium">
                <SpringyText
                    className="text-4xl mb-6 font-semibold"
                    text="| Projects"
                />
                <div className="px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start gap-6">
                    {projsData.map((proj, index) => (
                        <AllProjCard
                            key={proj.id}
                            {...proj}
                            index={index + 1}
                        />
                    ))}
                </div>
            </div>
            <StarsCanvas />
        </motion.div>
    );
};

export default ProjectsPage;
