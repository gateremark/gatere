import "../index.css";

const Cta = () => {
    return (
        <>
            <div className="flex justify-around gap-4 md:gap-10">
                <a
                    className="inline-block text-sm md:text-lg text-[#430680] px-2 py-3 md:py-3 md:px-5 br border-b-[3px] rounded-md hover:bg-[#380d63] hover:text-[#fff] transition ease-in-out duration-500"
                    href="https://drive.google.com/file/d/1r26v6WiOlpTBKMzagAlILNI7xzklht4O/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                >
                    Download Resume
                </a>
                <a
                    className="inline-block text-sm md:text-lg text-[#fff] bg-[#430680] px-2 py-3 md:py-3 md:px-5 br border-[#430680] rounded-md hover:bg-[#380d63] transition ease-in-out duration-500 "
                    href="#contact"
                >
                    Let's Talk
                </a>
            </div>
        </>
    );
};

export default Cta;
