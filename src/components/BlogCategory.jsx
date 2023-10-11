import { useState } from "react";
import CategoryButton from "./CategoryButton";

const BlogCategory = ({ categories, onFilterBlogs }) => {
	const [activeCategory, setActiveCategory] = useState("all");

	const changeCategory = (activeCat) => {
		setActiveCategory(activeCat);
		onFilterBlogs(activeCat);
	};

	return (
		<div className="flex gap-8 mb-3">
			{categories.map((category) => (
				<CategoryButton
					key={category}
					category={category}
					onChangeCategory={() => changeCategory(category)}
					className={`px-4 py-2 capitalize ${
						activeCategory == category
							? "bg-[#430680] text-[#ffffff]"
							: "bg-[#ffffff]"
					} rounded-lg hover:scale-110 hover:bg-[#b6b6b6] transition ease-in-out duration-200`}
				/>
			))}
		</div>
	);
};

export default BlogCategory;
