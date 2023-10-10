import { motion } from "framer-motion";
import { TypingText } from "../components/TypingText";
import { fadeIn, staggerContainer } from "../motion";

const Contact = () => {
	return (
		<motion.div
			id="Contact"
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className="ms-auto me-auto w-[95%] md:w-full"
		>
			<div className="pt-28 flex flex-col justify-center items-center font-medium">
				<TypingText
					title="| Contact"
					textStyles="text-4xl mb-10 font-semibold"
				/>
				<div className="bg-[#ccc] h-[300px] flex justify-between w-[90%] md:w-[80%]">
					{/* <div className=" w-40 md:w-72 aspect-square rounded-[2rem] bg-gradient-to-tr from-[#690cc600] via-[#430680] to-[#690cc600] flex items-center justify-center">
						<img
							className="w-40 md:w-72 rounded-[2rem] overflow-hidden rotate-[10deg] hover:rotate-0 transition ease-in-out duration-500"
							src="/gateremark.jpg"
							alt="Mark Gatere"
						/>
					</div> */}
					<div>Hello</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Contact;
