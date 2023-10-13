import { useState } from "react";
import StarsCanvas from "../canvas/Stars";
import { Tilt } from "react-tilt";

const StartPage = () => {
	const [pageHidden, setPageHidden] = useState(false);
	return (
		<div
			className={`${
				pageHidden
					? "hidden"
					: "bg-[#000000] flex justify-center fixed left-0 right-0 bottom-0 top-0 z-50"
			}`}
		>
			<div className="flex flex-col items-center w-[90%]">
				<p className="pt-5 md:pt-10 text-[#ffffff] new__alert text-lg text-center md:text-5xl">
					Welcome to My Out-of-This-World Portfolio...
				</p>
				<p className="pt-5 text-[#ffffff] new__alert text-lg md:text-xl text-center">
					Yeah, it's right behind this 'galaxy' 😂
				</p>
				<p className="pt-8 md:pt-14 text-[#ffffff] text-base md:text-2xl text-center p__alert">
					A quick heads-up: This portfolio is a work in progress, with some data
					still in 'orbit' 🚀
				</p>
				<p className="pt-5 text-[#ffffff] text-base md:text-2xl text-center p__alert">
					If you're eager for the full interstellar experience, I recommend
					visiting my{" "}
					<a
						href="https://gatere.vercel.app"
						target="_blank"
						rel="noreferrer"
						className="text-[#f0ed40] p__alert"
					>
						previous portfolio
					</a>
					;
					<br /> However, if you're ready to embark on this cosmic adventure,
					hit that <span className="new__alert text-[#1300bb]">
						Continue
					</span>{" "}
					button below!
				</p>
				<p className="pt-5 text-[#ffffff] text-base md:text-2xl text-center p__alert">
					See you among the stars 🫡
				</p>
				<p className="pt-3 text-[#ffffff] text-base md:text-2xl text-center">
					<a
						href="https://gateremark.vercel.app"
						className="text-[#f0ed40] text-3xl curly__name"
					>
						gateremark
					</a>{" "}
					😉
				</p>
				<button onClick={() => setPageHidden(true)}>
					<Tilt className="mt-10 md:mt-6 text-[#1300bb] new__alert text-lg md:text-xl text-center bg-[#ffffff] px-2 py-1 rounded-md">
						Continue
					</Tilt>
				</button>
			</div>
			<StarsCanvas />
		</div>
	);
};

export default StartPage;
