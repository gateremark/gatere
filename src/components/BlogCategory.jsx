import { useState } from "react";
import CategoryButton from "./CategoryButton";

const BlogCategory = ({ categories, onFilterBlogs }) => {
    const [activeCategory, setActiveCategory] = useState("all");

    const changeCategory = (activeCat) => {
        setActiveCategory(activeCat);
        onFilterBlogs(activeCat);
    };

    return (
        <div className="flex flex-wrap gap-6 md:gap-8 mb-3 mx-2 md:mx-0">
            {categories.map((category) => (
                <CategoryButton
                    key={category}
                    category={category}
                    onChangeCategory={() => changeCategory(category)}
                    className={` capitalize ${
                        activeCategory == category
                            ? "bg-[#01f53f] text-[#0B1120] px-3 py-2"
                            : " px-3 py-2 hover:py-[7px] hover:px-[11px] hover:border-[#01f53f] hover:border-solid hover:border"
                    } rounded-lg transition ease-in-out duration-150 active:bg-[#00000000] active:text-[#ffffff] `}
                />
            ))}
        </div>
    );
};

export default BlogCategory;
