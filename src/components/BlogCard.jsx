import { motion } from "framer-motion";
import { fadeIn } from "../motion";
import { BsArrowUpRightSquare } from "react-icons/bs";

const BlogCard = ({ imgUrl, title, subtitle, url, index }) => (
	<motion.div
		variants={fadeIn("up", "spring", index * 0.5, 1)}
		className="flex md:flex-row flex-col gap-4"
	>
		<img
			src={imgUrl}
			alt="planet-01"
			className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
			width="270px"
			height="250px"
		/>
		<div className="w-full flex justify-between items-center">
			<a
				href={url}
				target="_blank"
				rel="noreferrer"
				className=""
				aria-label="Read more about the blog"
			>
				<div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px] md:hover:scale-100 hover:scale-105 transition ease-in-out duration-500">
					<h4 className="font-normal lg:text-[42px] text-[26px] flex items-center justify-between">
						{title} <BsArrowUpRightSquare className="md:hidden text-xl" />{" "}
					</h4>
					<p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
						{subtitle}
					</p>
				</div>
			</a>

			<div className="md:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
				<a
					href={url}
					target="_blank"
					rel="noreferrer"
					aria-label="Read more about the blog"
				>
					<BsArrowUpRightSquare className="text-5xl hover:scale-110 transition ease-in-out duration-150" />
				</a>
			</div>
		</div>
	</motion.div>
);

export default BlogCard;
