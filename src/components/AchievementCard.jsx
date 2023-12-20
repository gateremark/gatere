import { Tilt } from "react-tilt";
import { BsArrowUpRightSquare } from "react-icons/bs";

const AchievementCard = ({ imgUrl, title, link }) => {
    return (
        <Tilt
            options={{ scale: 1.2 }}
            className="bg-[#ffffff] h-[200px] rounded-xl flex flex-col justify-center items-center mb-16 hover:bg-[#00000003] transition ease-in-out duration-[100ms] achCard"
        >
            <img
                src={imgUrl}
                alt="achievement-img"
                className="w-[30%] object-contain rounded-lg min-h-[7rem] max-h-[15rem]"
            />
            <span className="font-semibold text-center flex flex-col items-center gap-2 justify-between h-[100%]">
                {title}{" "}
                <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open Achievement"
                >
                    <BsArrowUpRightSquare className=" text-lg hover:scale-110 transition ease-in-out duration-150 mb-3" />
                </a>{" "}
            </span>
        </Tilt>
    );
};

export default AchievementCard;
