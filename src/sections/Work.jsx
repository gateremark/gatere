import { motion } from "framer-motion";
import { TypingText } from "../components/TypingText";
import { staggerContainer } from "../motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { workData } from "../components/WorkData";
import WorkCard from "../components/WorkCard";

const Work = () => {
	return (
		<motion.div
			id="work"
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.1 }}
			className="ms-auto me-auto w-[95%] md:w-full"
		>
			<div className="pt-12 flex flex-col justify-center items-center font-medium">
				<TypingText
					title="Work Experience"
					textStyles="text-4xl mb-10 font-semibold"
				/>
				<div className="">
					<VerticalTimeline lineColor={"#1d1836"}>
						{workData.map((work, index) => (
							<WorkCard key={`work-${index}`} work={work} />
						))}
					</VerticalTimeline>
				</div>
			</div>
		</motion.div>
	);
};

export default Work;
