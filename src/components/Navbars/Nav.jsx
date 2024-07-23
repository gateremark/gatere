const Nav = ({ className, item }) => {
    return (
        <li
            className={` ${className} grid text-[#ffffff] rounded-full text-xl`}
        >
            <a
                href={item.link}
                className={` p-2 rounded-full flex justify-center items-center ${
                    // Check if the current item is active
                    className.includes("active")
                        ? "bg-[#01f53f] text-[#0B1120]"
                        : ""
                } `}
                aria-label="Section"
            >
                {item.icon}
            </a>
        </li>
    );
};

export default Nav;
