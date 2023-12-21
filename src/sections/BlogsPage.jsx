import { motion } from "framer-motion";
import { useEffect } from "react";
import { TypingText } from "../components/TypingText";
import { staggerContainer } from "../motion";
import AllBlogCard from "../components/AllBlogCard";
import { Link } from "react-router-dom";
import { GiReturnArrow } from "react-icons/gi";
import { useState } from "react";
import { blogData } from "../components/DataBlog";
import BlogCategory from "../components/BlogCategory";
import StarsCanvas from "../canvas/Stars";

const BlogsPage = () => {
    const [blogs, setBlogs] = useState(blogData);

    const categories = blogData.map((items) => items.category);
    const uniqueCategories = ["all", ...new Set(categories)];

    const filterBlog = (category) => {
        if (category === "all") {
            setBlogs(blogData);
            return;
        }
        const filteredBlogs = blogData.filter(
            (project) => project.category === category
        );
        setBlogs(filteredBlogs);
    };

    useEffect(() => {
        // Scroll to the top of the page when the component is mounted
        window.scrollTo(0, 0);
    }, []);
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="ms-auto me-auto w-[95%] md:w-full pb-10 h-fit text-slate-200"
        >
            <Link
                to="/"
                className="flex absolute justify-center items-center text-[#01f53f] top-5 md:top-10 left-5 md:left-20 gap-3 hover:scale-110 transition ease-in-out duration-200"
            >
                <GiReturnArrow className="text-xl sm:text-3xl md:text-5xl" />
                <span className="text-xl sm:text-2xl md:text-4xl ">Home</span>
            </Link>
            <div className="pt-16 flex flex-col justify-center items-center font-medium">
                <TypingText
                    title="| Blogs"
                    textStyles="text-4xl mb-6 font-semibold"
                />
                <BlogCategory
                    categories={uniqueCategories}
                    onFilterBlogs={filterBlog}
                />
                <div className="px-5 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start gap-6">
                    {blogs.map((item, index) => (
                        <AllBlogCard
                            key={`blog-${index}`}
                            {...item}
                            index={index + 1}
                        />
                    ))}
                </div>
            </div>
            <StarsCanvas />
        </motion.div>
    );
};

export default BlogsPage;
