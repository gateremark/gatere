import { motion } from "framer-motion";
import { TypingText } from "../components/TypingText";
import { staggerContainer } from "../motion";
import BlogCard from "../components/BlogCard";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Blog = () => {
	const blogData = [
		{
			imgUrl:
				"https://res.cloudinary.com/dvuazircp/image/upload/v1697206762/blog1_x1t6g5.webp",
			title: "ReactJS 101: Let's Build Robust Web Applications with React.",
			subtitle:
				"Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.",
			url: "https://gateremark.hashnode.dev/reactjs-101-lets-build-robust-web-applications-with-react",
		},
		{
			imgUrl:
				"https://res.cloudinary.com/dvuazircp/image/upload/v1697206761/blog2_xlzwpr.webp",
			title: "Python from the word ...Go",
			subtitle:
				"Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum",
			url: "https://dev.to/gateremark/python-from-the-word-go-pt2-31k0",
		},
		{
			imgUrl:
				"https://res.cloudinary.com/dvuazircp/image/upload/v1697206776/blog3_bhrvf4.webp",
			title: "Mastering the Art of Web Design",
			subtitle:
				"Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem",
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
			className="ms-auto me-auto w-[95%] md:w-full"
		>
			<div className="pt-16 flex flex-col justify-center items-center font-medium">
				<TypingText title="| Blog" textStyles="text-4xl mb-8 font-semibold" />
				<div className="w-[85%] flex flex-col gap-[30px]">
					{blogData.map((item, index) => (
						<BlogCard key={`blog-${index}`} {...item} index={index + 1} />
					))}
				</div>
				<Link
					to="/blogspage"
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
