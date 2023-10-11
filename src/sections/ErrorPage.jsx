import { Link } from "react-router-dom";
import { GiReturnArrow } from "react-icons/gi";
import error from "../assets/error.svg";

const ErrorPage = () => {
	return (
		<div>
			<Link
				to="/"
				className="flex absolute justify-center items-center text-[#430680] top-5 md:top-10 left-5 md:left-20 gap-3 hover:scale-110 transition ease-in-out duration-200"
			>
				<GiReturnArrow className="text-xl sm:text-3xl md:text-5xl" />
				<span className="text-xl sm:text-2xl md:text-4xl ">Home</span>
			</Link>
			<img src={error} alt="404 Error" className="mt-14 md:mt-0" />
		</div>
	);
};

export default ErrorPage;
