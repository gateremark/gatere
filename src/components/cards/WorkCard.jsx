import { VerticalTimelineElement } from "react-vertical-timeline-component";

const WorkCard = ({ work }) => {
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{
                background: "#005c1700",
                color: "#ffffff",
                // borderBottom: "6px",
                // borderStyle: "solid",
                // borderBottomColor: "#01f53f",
                boxShadow: "0px 0px 20px -1px #01f53f80",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #0B1120" }}
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
            <div className="relative">
                {work.supported && (
                    <a
                        href="https://www.linkedin.com/posts/gateremark_lishebora-activity-7175619257274118146-NmOi"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className=" absolute text-xs -top-9 -right-6 bg-[#00701c] hover:bg-[#11471f] p-1 rounded-full text-[#ffffff] transition duration-300 ease-in-out">
                            {work.supported}
                        </span>
                    </a>
                )}
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
