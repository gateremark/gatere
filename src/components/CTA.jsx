import "../index.css";

const Cta = () => {
	return (
		<>
			<div className="flex justify-around gap-4 md:gap-10">
				<a
					className="inline-block text-sm md:text-lg text-[#690cc6] px-1 py-3 md:py-3 md:px-5 br border-b-[3px] rounded-md hover:bg-[#380d63] hover:text-[#fff] transition ease-in-out duration-500"
					href=""
				>
					Download CV
				</a>
				<a
					className="inline-block text-sm md:text-lg text-[#fff] bg-[#690cc6] px-1 py-3 md:py-3 md:px-5 br border-[#690cc6] border-b-[3px] rounded-md hover:bg-[#380d63] transition ease-in-out duration-500 "
					href="#Contact"
				>
					Let's Talk
				</a>
			</div>
		</>
	);
};

export default Cta;
