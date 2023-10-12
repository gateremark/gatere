const AchievementCard = ({ imgUrl, title }) => {
	return (
		<div className="bg-[#ffffff] h-[200px] rounded-xl flex flex-col justify-center items-center mb-16 hover:bg-[#dddddd] hover:translate-y-1 transition ease-in-out duration-200">
			<img
				src={imgUrl}
				alt=""
				className="w-[30%] object-contain mb-4 rounded-lg min-h-[7rem] max-h-[15rem]"
			/>
			<span className="font-semibold text-center">{title}</span>
		</div>
	);
};

export default AchievementCard;
