import { motion } from "framer-motion";
import { TypingText } from "../components/TypingText";
import { staggerContainer } from "../motion";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { workData } from "../components/WorkData";

const WorkCard = ({ work }) => {
	return (
		<VerticalTimelineElement
			className="vertical-timeline-element"
			contentStyle={{
				background: "#1d1836",
				color: "#ffffff",
			}}
			contentArrowStyle={{ borderRight: "7px solid  #1d1836" }}
			date={work.date}
			iconStyle={{ background: work.iconBg }}
			icon={
				<div className="flex justify-center items-center w-full h-full">
					<img
						src={work.icon}
						alt={work.company_name}
						className="w-[60%] h-[60%] object-contain"
					/>
				</div>
			}
		>
			<div>
				<h3 className="text-[#ffffff] text-[24px] font-bold">{work.title}</h3>
				<p
					className="text-secondary text-[16px] font-semibold"
					style={{ margin: 0 }}
				>
					{work.company_name}
				</p>
			</div>

			<ul className="mt-5 list-disc ml-5 space-y-2">
				{work.points.map((point, index) => (
					<li
						key={`work-point-${index}`}
						className="text-white-100 text-[14px] pl-1 tracking-wider"
					>
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
};

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
