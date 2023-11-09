import { Tilt } from "react-tilt";

const AchievementCard = ({ imgUrl, title }) => {
    return (
        <Tilt
            options={{ scale: 1.2 }}
            className="bg-[#ffffff] h-[200px] rounded-xl flex flex-col justify-center items-center mb-16 hover:bg-[#00000003] transition ease-in-out duration-[100ms] achCard"
        >
            <img
                src={imgUrl}
                alt="achievement-img"
                className="w-[30%] object-contain mb-4 rounded-lg min-h-[7rem] max-h-[15rem]"
            />
            <span className="font-semibold text-center">{title}</span>
        </Tilt>
    );
};

export default AchievementCard;
