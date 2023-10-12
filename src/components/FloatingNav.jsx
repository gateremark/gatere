import { FaHouse } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa6";
import { FaBlackTie } from "react-icons/fa6";
import { FaPenToSquare } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import Scrollspy from "react-scrollspy";
import Nav from "./Nav";

const FloatingNav = () => {
	const navData = [
		{ id: 1, link: "#", icon: <FaHouse /> },
		{ id: 1, link: "#about", icon: <FaUser /> },
		{ id: 1, link: "#projects", icon: <FaRocket /> },
		{ id: 1, link: "#work", icon: <FaBlackTie /> },
		{ id: 1, link: "#blog", icon: <FaPenToSquare /> },
		{ id: 1, link: "#achievements", icon: <FaStar /> },
		{ id: 1, link: "#contact", icon: <FaEnvelope /> },
	];
	return (
		<ul className="flex md:hidden fixed items-center bottom-[1.5rem] left-[50%] z-50 translate-x-[-50%]">
			<Scrollspy
				offset={-400}
				className="flex gap-2 bg-[#00000040] px-4 py-2 rounded-full backdrop-blur-[10px]"
				items={[
					"#",
					"about",
					"projects",
					"work",
					"blog",
					"achievements",
					"contact",
				]}
				currentClassName="active"
			>
				{navData.map((item) => (
					<Nav key={item.id} item={item} />
				))}
			</Scrollspy>
		</ul>
	);
};

export default FloatingNav;
