import { motion } from "framer-motion";
import { TypingText } from "../components/TypingText";
import { staggerContainer } from "../motion";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaDev, FaHashnode, FaMedium } from "react-icons/fa6";
import { useState } from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(e) {
        // e.preventDefault();
        // console.log(e.target);
        // useEffect(() => {
        //     // Use setTimeout to set fields to empty after 5 seconds
        //     const timeoutId = setTimeout(() => {
        //         setName("");
        //         setEmail("");
        //         setSubject("");
        //         setMessage("");
        //     }, 5000);
        //     // Clear the timeout if the component unmounts
        //     return () => clearTimeout(timeoutId);
        // }, []);
    }

    return (
        <motion.div
            id="contact"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            className="py-10 flex flex-col justify-center items-center font-medium ms-auto me-auto w-[95%] md:w-full text-slate-200"
        >
            <TypingText
                title="| Contact"
                textStyles="text-4xl mb-10 font-semibold"
            />
            <div className="w-[90%] md:w-[65%] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-32">
                <div className=" flex flex-col items-center gap-5">
                    <article className=" w-[90%] px-5 py-7 rounded-xl text-lg flex flex-col items-center justify-center gap-3 bg-[#00000000] backdrop-blur-[2px] shadow-2xl hover:shadow-3xl hover:bg-[#00000010] hover:scale-[1.01] transition ease-in-out duration-200">
                        <MdOutlineLocationOn className="text-3xl text-[#01f53f] font-bold" />
                        <h4>Location</h4>

                        <h5 className="font-semibold hover:scale-105 transition ease-in-out duration-200">
                            Nyeri, Kenya
                        </h5>
                    </article>
                    <article className=" w-[90%] px-5 py-7 rounded-xl text-lg flex flex-col items-center justify-center gap-3 bg-[#00000000] backdrop-blur-[2px] shadow-2xl hover:shadow-3xl hover:bg-[#00000010] hover:scale-[1.01] transition ease-in-out duration-200">
                        <MdOutlineEmail className="text-3xl text-[#01f53f] font-bold" />
                        <h4>Email</h4>

                        <a
                            href="mailto:gateremg@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            className="font-semibold hover:scale-105 transition ease-in-out duration-200"
                        >
                            <h5>gateremg@gmail.com</h5>
                        </a>
                    </article>
                    <article className=" w-[90%] px-5 py-7 rounded-xl text-lg flex flex-col items-center justify-center gap-3 bg-[#00000000] backdrop-blur-[2px] shadow-2xl hover:shadow-3xl hover:bg-[#00000010] hover:scale-[1.01] transition ease-in-out duration-200">
                        <FiPhone className="text-3xl text-[#01f53f] font-bold" />
                        <h4>Phone</h4>

                        <h5 className="font-semibold hover:scale-105 transition ease-in-out duration-200">
                            (+254) 757826724
                        </h5>
                    </article>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-between items-center mb-3">
                        <a
                            href="https://hashnode.com/@gateremark"
                            target="_blank"
                            rel="noreferrer"
                            title="Hashnode"
                            className=" text-5xl font-semibold hover:scale-110 transition ease-in-out duration-200"
                            aria-label="Hashnode"
                        >
                            <FaHashnode className="text-[#01f53f]" />
                        </a>
                        <a
                            href="https://dev.to/gateremark"
                            target="_blank"
                            rel="noreferrer"
                            title="Dev.to"
                            className="text-5xl font-semibold hover:scale-110 transition ease-in-out duration-200"
                            aria-label="Dev.to"
                        >
                            <FaDev className="text-[#01f53f]" />
                        </a>
                        <a
                            href="https://gateremark.medium.com/"
                            target="_blank"
                            rel="noreferrer"
                            title="Medium"
                            className=" text-5xl font-semibold hover:scale-110 transition ease-in-out duration-200"
                            aria-label="Medium"
                        >
                            <FaMedium className="text-[#01f53f]" />
                        </a>
                    </div>
                    <TypingText
                        title="Reach Out!"
                        textStyles="text-xl font-semibold text-center"
                    />
                    <form
                        action="https://formspree.io/f/xgebporq"
                        method="post"
                        onSubmit={() => handleSubmit}
                        className="flex flex-col items-center md:items-start gap-5 mt-1"
                    >
                        <input
                            type="text"
                            name="Name"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="text-[#01f53f] resize-none w-[100%] px-4 py-2 rounded bg-[#00000000] border-2 border-solid border-[#01f53f] focus:bg-[#ffffff00]"
                        />
                        <input
                            type="text"
                            name="Email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="text-[#01f53f] resize-none w-[100%] px-4 py-2 rounded bg-[#00000000] border-2 border-solid border-[#01f53f] focus:bg-[#ffffff00]"
                        />
                        <input
                            type="text"
                            name="Subject"
                            placeholder="Subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                            className="text-[#01f53f] resize-none w-[100%] px-4 py-2 rounded bg-[#00000000] border-2 border-solid border-[#01f53f] focus:bg-[#ffffff00]"
                        />
                        <textarea
                            name="Message"
                            cols="30"
                            rows="6"
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="text-[#01f53f] resize-none w-[100%] py-6 px-4 rounded bg-[#00000000] border-2 border-solid border-[#01f53f] focus:bg-[#ffffff00]"
                        ></textarea>

                        <button
                            type="submit"
                            className=" w-fit flex justify-center gap-2 items-center md:text-lg text-[#0B1120] bg-[#01f53f] px-2 py-2 md:py-2 br border-[#01f53f] rounded-md hover:bg-[#00701c] transition ease-in-out duration-500"
                        >
                            {" "}
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
