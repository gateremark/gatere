import Navbar from "../components/Navbar";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Work from "./Work";
import Blog from "./Blog";
import Achievements from "./Achievements";
import Contact from "./Contact";
import FloatingNav from "../components/FloatingNav";
import { useRef, useState, useEffect } from "react";

function Home() {
	const mainRef = useRef();

	const [showFloatingNav, setShowFloatingNav] = useState(true);
	const [siteYPosition, setSiteYPosition] = useState(0);

	const showFloatingNavHandler = () => {
		setShowFloatingNav(true);
	};
	const hideFloatingNavHandler = () => {
		setShowFloatingNav(false);
	};

	const floatingNavToggleHandler = () => {
		if (
			siteYPosition < mainRef?.current?.getBoundingClientRect().y - 5 ||
			siteYPosition > mainRef?.current?.getBoundingClientRect().y + 5
		) {
			showFloatingNavHandler();
		} else {
			hideFloatingNavHandler();
		}

		setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
	};

	useEffect(() => {
		const checkYPosition = setInterval(floatingNavToggleHandler, 2000);
		return () => clearInterval(checkYPosition);
	}, [siteYPosition]);
	return (
		<div className=" transition-all ease-in-out duration-500" ref={mainRef}>
			<div>
				<Navbar />
				<Header />
				<About />
				<Projects />
				<Work />
				<Blog />
				<Achievements />
				<Contact />
				{showFloatingNav && <FloatingNav />}
			</div>
		</div>
	);
}

export default Home;
