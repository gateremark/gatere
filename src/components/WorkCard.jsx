import { VerticalTimelineElement } from "react-vertical-timeline-component";

const WorkCard = ({ work }) => {
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{
                background: "#1d1836",
                color: "#ffffff",
                borderBottom: "6px",
                borderStyle: "solid",
                borderBottomColor: "#03dac6",
                boxShadow: "0px 12px 20px -8px #1d183670",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #1d1836" }}
            date={work.date}
            iconStyle={{ background: work.iconBg }}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <img
                        src={work.icon}
                        alt={work.company_name}
                        className="w-[60%] h-[60%] object-contain"
                        width="36px"
                        height="36px"
                    />
                </div>
            }
        >
            <div>
                <h3 className="text-[#ffffff] text-[24px] font-bold">
                    {work.title}
                </h3>
                <p
                    className="text-secondary text-[16px] font-semibold"
                    style={{ margin: 0 }}
                >
                    {work.company_name}
                </p>
            </div>

            <ul className="mt-5 list-disc ml-5 space-y-2">
                {work.points.map((point, index) => (
                    <li
                        key={`work-point-${index}`}
                        className="text-white-100 text-[14px] pl-1 tracking-wider"
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

export default WorkCard;
