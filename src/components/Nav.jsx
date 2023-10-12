const Nav = ({ className, item }) => {
	return (
		<li className={` ${className} grid text-[#ffffff] rounded-full text-xl`}>
			<a
				href={item.link}
				className={` p-2 rounded-full flex justify-center items-center ${
					// Check if the current item is active
					className.includes("active") ? "bg-[#430680]" : ""
				} `}
			>
				{item.icon}
			</a>
		</li>
	);
};

export default Nav;