import Navbar from "../components/Navbar";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Work from "./Work";
import Blog from "./Blog";
import Achievements from "./Achievements";
import Contact from "./Contact";

function Home() {
	return (
		<div className=" transition-all ease-in-out duration-500">
			<div>
				<Navbar />
				<Header />
				<About />
				<Projects />
				<Work />
				<Blog />
				<Achievements />
				<Contact />
			</div>
		</div>
	);
}

export default Home;
