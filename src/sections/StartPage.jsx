import { useState } from "react";
// import StarsCanvas from "../canvas/Stars";
import { Tilt } from "react-tilt";
import { Toaster, toast } from "sonner";

const StartPage = () => {
    const [pageHidden, setPageHidden] = useState(false);
    toast.info("Work Experience Section - Incomplete!");

    return (
        <div
            className={`${
                pageHidden
                    ? "hidden"
                    : "bg-[#00000090] flex justify-center items-center fixed left-0 right-0 bottom-0 top-0 z-50 h-screen"
            }`}
        >
            {/* <div className="flex flex-col items-center w-[90%]">
                <div className="flex">
                    <p
                        ref={typedTextRef}
                        className="pt-5 md:pt-10 text-[#ffffff] new__alert text-3xl text-center md:text-5xl w-[100%]"
                    ></p>
                    <span className="hidden xl:inline typewrite"></span>
                </div>
                <p className="pt-6 text-[#ffffff] other__alert text-base md:text-xl text-center">
                    Yeah, it's right behind this 'galaxy' 😂
                </p>
                <p className="pt-8 md:pt-14 text-[#ffffff] text-base md:text-2xl text-center p__alert">
                    A quick heads-up: This portfolio is a work in progress, with
                    some data still in 'orbit' 🚀
                </p>
                <p className="pt-5 text-[#ffffff] text-base md:text-2xl text-center p__alert">
                    If you're eager for the full interstellar experience, I
                    recommend visiting my{" "}
                    <a
                        href="https://gatere.vercel.app"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#f0ed40] p__alert"
                        aria-label="Previous portfolio"
                    >
                        previous portfolio
                    </a>
                    ;
                    <br /> However, if you're ready to embark on this cosmic
                    adventure, hit that{" "}
                    <span className="other__alert text-[#1300bb]">
                        Continue
                    </span>{" "}
                    button below!
                </p>
                <p className="pt-5 text-[#ffffff] text-base md:text-2xl text-center p__alert">
                    See you among the stars 👨🏾‍🚀
                </p>
                <p className="pt-3 text-[#ffffff] text-base md:text-2xl text-center">
                    <a
                        href="https://gateremark.vercel.app"
                        className="text-[#f0ed40] text-3xl curly__name"
                        aria-label="gateremark"
                    >
                        gateremark
                    </a>{" "}
                    😉
                </p>
                <button
                    onClick={() => setPageHidden(true)}
                    className="mt-10 md:mt-6"
                >
                    <Tilt className=" text-[#1300bb] other__alert text-lg md:text-xl text-center bg-[#ffffff] px-2 py-1 rounded-md">
                        Continue
                    </Tilt>
                </button>
            </div> */}
            {/* <StarsCanvas /> */}
            <Toaster richColors position="top-right" />
            <Tilt className="flex flex-col bg-white px-2 py-2 rounded-md gap-2">
                <p className="text-slate-600 font-semibold">
                    {" "}
                    Work Experience Section - Incomplete!
                </p>
                <button
                    onClick={() => setPageHidden(true)}
                    className=" bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent font-semibold drop-shadow"
                >
                    Click here to Continue
                </button>
            </Tilt>
        </div>
    );
};

export default StartPage;
