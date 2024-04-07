import "../index.css";

const Cta = () => {
    return (
        <>
            <div className="flex justify-around gap-4 md:gap-10">
                <a
                    className="inline-block text-sm md:text-lg text-[#01f53f] px-2 py-3 md:py-3 md:px-5 border-[#01f53f] border-solid border rounded-md hover:bg-[#00701c] hover:border-[#00701c] hover:text-[#0B1120] transition ease-in-out duration-500"
                    href="https://drive.google.com/file/d/16BYh3zo2oKybWUluRXHwWVtrBXHmM3Gw/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                >
                    Download Resume
                </a>
                <a
                    className="inline-block text-sm md:text-lg text-[#0B1120] bg-[#01f53f] px-2 py-3 md:py-3 md:px-5 border-[#01f53f] border-solid border rounded-md hover:bg-[#00701c] hover:border-[#00701c] transition ease-in-out duration-500 "
                    href="#contact"
                >
                    Let's Talk
                </a>
            </div>
        </>
    );
};

export default Cta;
