import { motion } from "framer-motion";
import { TypingText } from "../components/TypingText";
import { staggerContainer } from "../motion";
import BlogCard from "../components/BlogCard";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

const Blog = () => {
	const blogData = [
		{
			imgUrl: "blog1.png",
			title: "ReactJS 101: Let's Build Robust Web Applications with React.",
			subtitle:
				"Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.",
			url: "https://github.com/gateremark",
		},
		{
			imgUrl: "blog2.png",
			title: "Python from the word ...Go",
			subtitle:
				"Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum",
			url: "https://twitter.com/gatere_mark",
		},
		{
			imgUrl: "blog3.png",
			title: "Mastering the Art of Web Design (Part 1)",
			subtitle:
				"Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem",
			url: "https://www.linkedin.com/in/gateremark/",
		},
	];
	return (
		<motion.div
			id="Blog"
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className="ms-auto me-auto w-[95%] md:w-full"
		>
			<div className="pt-28 flex flex-col justify-center items-center font-medium">
				<TypingText title="| Blog" textStyles="text-4xl mb-8 font-semibold" />
				<div className="w-[85%] flex flex-col gap-[30px]">
					{blogData.map((item, index) => (
						<BlogCard key={`blog-${index}`} {...item} index={index + 1} />
					))}
				</div>
				<a
					href="https://github.com/gateremark"
					target="_blank"
					rel="noreferrer"
					className="flex flex-col justify-center items-center mt-10 text-xl font-semibold hover:scale-110 transition ease-in-out duration-200"
				>
					<BsFillArrowUpRightCircleFill />
					<TypingText
						title="More Blogs"
						textStyles=""
					/>
				</a>
			</div>
		</motion.div>
	);
};

export default Blog;
