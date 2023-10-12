import { motion } from "framer-motion";
import { fadeIn } from "../motion";
import { BsArrowUpRightSquare } from "react-icons/bs";

const AllBlogCard = ({ category, imgUrl, title, subtitle, url, index }) => (
	<motion.div
		variants={fadeIn("right", "spring", index * 0.5, 0.75)}
		className="relative flex flex-col py-6 px-5 bg-[#ffffff] rounded-xl items-center"
	>
		<span className="absolute glassmorphism rounded px-2 py-1 top-6 left-5 text-[#ffffff] capitalize">
			{category}
		</span>
		<img
			src={imgUrl}
			alt={title}
			className="w-[100%] mb-4 h-fit rounded-lg min-h-[7rem] max-h-[15rem]"
		/>
		<div className="w-[95%] mb-3">
			<h6 className="text-lg font-bold mb-2">{title}</h6>
			<p>{subtitle}</p>
		</div>
		<a href={url} target="_blank" rel="noreferrer">
			<BsArrowUpRightSquare className="text-5xl text-[#430680] hover:scale-110 transition ease-in-out duration-150" />
		</a>
	</motion.div>
);

export default AllBlogCard;