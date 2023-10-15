import "../index.css";

const Cta = () => {
	return (
		<>
			<div className="flex justify-around gap-4 md:gap-10">
				<a
					className="inline-block text-sm md:text-lg text-[#690cc6] px-2 py-3 md:py-3 md:px-5 br border-b-[3px] rounded-md hover:bg-[#380d63] hover:text-[#fff] transition ease-in-out duration-500"
					href="https://drive.google.com/file/d/1vGSJHXNGGTao-JoUGLumbKljMVe1dKEK/view?usp=drive_link"
					target="_blank"
					rel="noreferrer"
					aria-label="Resume"
				>
					Download Resume
				</a>
				<a
					className="inline-block text-sm md:text-lg text-[#fff] bg-[#690cc6] px-2 py-3 md:py-3 md:px-5 br border-[#690cc6] rounded-md hover:bg-[#380d63] transition ease-in-out duration-500 "
					href="#contact"
					aria-label="Contact section"
				>
					Let's Talk
				</a>
			</div>
		</>
	);
};

export default Cta;
