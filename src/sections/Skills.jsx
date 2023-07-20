const Skills = () => {
  return (
		<section className="mt-6 ms-auto me-auto w-[95%] md:w-full">
			<div className=" flex flex-col justify-center items-center font-medium">
				<h2 className="text-2xl mb-10">Skills</h2>
				<div className="flex justify-between w-[90%] md:w-[80%]">
					<div className=" w-40 md:w-72 aspect-square rounded-[2rem] bg-gradient-to-tr from-[#690cc600] via-[#430680] to-[#690cc600] flex items-center justify-center">
						<img
							className="w-40 md:w-72 rounded-[2rem] overflow-hidden rotate-[10deg] hover:rotate-0 transition ease-in-out duration-500"
							src="/gateremark.jpg"
							alt="Mark Gatere"
						/>
					</div>
					<div>Hello</div>
				</div>
			</div>
		</section>
	);
}

export default Skills