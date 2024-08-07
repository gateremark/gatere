import { motion } from "framer-motion";
import { TypingText } from "../../components/animationtext/TypingText";
import { staggerContainer } from "../../motion";
import BlogCard from "../../components/cards/BlogCard";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Blog = () => {
	const blogData = [
		{
			imgUrl:
				"https://res.cloudinary.com/dvuazircp/image/upload/v1697418362/new_portfolio/react_ssewqz.webp",
			title: "ReactJS 101: Let's Build Robust Web Applications with React.",
			subtitle:
				"Unlock the potential of ReactJS to create web applications that are not just robust but also highly dynamic and user-friendly.",
			url: "https://gateremark.hashnode.dev/reactjs-101-lets-build-robust-web-applications-with-react",
		},
		{
			imgUrl:
				"https://res.cloudinary.com/dvuazircp/image/upload/v1697418363/new_portfolio/python_imatnk.webp",
			title: "Python from the word ...Go",
			subtitle:
				"Begin your exciting coding adventure from the very first step as you delve into the world of Python.",
			url: "https://dev.to/gateremark/python-from-the-word-go-4h93",
		},
		{
			imgUrl:
				"https://res.cloudinary.com/dvuazircp/image/upload/v1697418363/new_portfolio/design_purr2k.webp",
			title: "Mastering the Art of Web Design",
			subtitle:
				"Not many people are good at both writing code and designing, therefore, this will set you apart from many developers out there.",
			url: "https://gateremark.hashnode.dev/mastering-the-art-of-web-design-part-1",
		},
	];
	return (
		<motion.div
			id="blog"
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.1 }}
			className="ms-auto me-auto w-[95%] md:w-full text-slate-200"
		>
			<div className="pt-16 flex flex-col justify-center items-center font-medium">
				<TypingText title="| Blog" textStyles="text-4xl mb-8 font-semibold" />
				<div className="w-[85%] flex flex-col gap-[30px]">
					{blogData.map((item, index) => (
						<BlogCard key={`blog-${index}`} {...item} index={index + 1} />
					))}
				</div>
				<Link
					to="/blogs"
					className="flex flex-col justify-center items-center mt-10 text-xl font-semibold hover:scale-110 transition ease-in-out duration-200"
				>
					<BsFillArrowUpRightCircleFill />
					<TypingText title="More Blogs" textStyles="" />
				</Link>
			</div>
		</motion.div>
	);
};

export default Blog;
