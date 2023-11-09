const CategoryButton = ({ category, className, onChangeCategory }) => {
    return (
        <button
            className={className}
            onClick={() => onChangeCategory(category)}
        >
            {category}
        </button>
    );
};

export default CategoryButton;
