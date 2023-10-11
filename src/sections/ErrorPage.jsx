import { Link } from "react-router-dom";
import { GiReturnArrow } from "react-icons/gi";
import error from "../assets/error.svg";

const ErrorPage = () => {
	return (
		<div >
			<Link
				to="/"
				className="flex absolute justify-center items-center top-10 left-20 gap-3 hover:scale-110 transition ease-in-out duration-200"
			>
				<GiReturnArrow className="text-5xl" />
				<span className="text-4xl">Home</span>
			</Link>
			<img src={error} alt="404 Error" />
		</div>
	);
};

export default ErrorPage;
