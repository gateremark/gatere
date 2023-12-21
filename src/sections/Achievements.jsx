import { motion } from "framer-motion";
import { TypingText } from "../components/TypingText";
import { staggerContainer } from "../motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import AchievementCard from "../components/AchievementCard";

const Achievements = () => {
    const achievementData = [
        {
            imgUrl: "https://res.cloudinary.com/dvuazircp/image/upload/v1697061485/new_portfolio/gdsc_ddlz0h.webp",
            title: "Google Developer Student Clubs, Lead",
            link: "https://gdsc.community.dev/dedan-kimathi-university-of-technology/",
        },
        {
            imgUrl: "https://res.cloudinary.com/dvuazircp/image/upload/v1697061515/new_portfolio/mlsa_ruvsls.webp",
            title: "Microsoft Learn Student Ambassador",
            link: "https://mvp.microsoft.com/en-US/studentambassadors/profile/5fa3a46c-5ba5-4864-b963-19a5d2b2b939",
        },
        {
            imgUrl: "https://res.cloudinary.com/dvuazircp/image/upload/v1697061470/new_portfolio/emai_lfxjtq.webp",
            title: "Keynote Speaker, EnhanceMind AI Conference",
            link: "https://www.linkedin.com/posts/emai-conference_speaker-announcement-we-are-excited-to-activity-6990074326230159360-pjZ6?utm_source=share&utm_medium=member_desktop",
        },
        {
            imgUrl: "https://res.cloudinary.com/dvuazircp/image/upload/v1702278864/new_portfolio/globalai_cz5o7m.svg",
            title: "Host, Global AI Conference - Student Edition",
            link: "https://www.linkedin.com/posts/gateremark_global-ai-conference-12-december-2023-activity-7137808342890012672-_qKe?utm_source=share&utm_medium=member_desktop",
        },
        {
            imgUrl: "https://res.cloudinary.com/dvuazircp/image/upload/v1702495519/new_portfolio/msreactor_xu9ye8.svg",
            title: "Featured - Microsoft Reactor",
            link: "https://developer.microsoft.com/en-us/reactor/events/21444/",
        },
        {
            imgUrl: "https://res.cloudinary.com/dvuazircp/image/upload/v1703161663/new_portfolio/gdg_efz2ec.webp",
            title: "Google Developer Groups, Organizer",
            link: "https://gdg.community.dev/gdg-nyeri/",
        },
        {
            imgUrl: "https://res.cloudinary.com/dvuazircp/image/upload/v1703093623/new_portfolio/gdl-ml_ncui8y.webp",
            title: "Technical Blogger, Google Dev Library",
            link: "https://devlibrary.withgoogle.com/authors/gateremark",
        },
        {
            imgUrl: "https://res.cloudinary.com/dvuazircp/image/upload/v1697061541/new_portfolio/ysk_fwqpaf.webp",
            title: "Young Scientists Kenya, Mentor",
            link: "https://www.linkedin.com/posts/gateremark_innovation-activity-6996885084066705408-JZ5Z?utm_source=share&utm_medium=member_desktop",
        },
        {
            imgUrl: "https://res.cloudinary.com/dvuazircp/image/upload/v1697061565/new_portfolio/zindi_klkyw3.webp",
            title: "Zindi - Kenya Student Ambassador",
            link: "https://www.linkedin.com/posts/gateremark_machinelearning-huggingface-artificialintelligence-activity-6944601724997238784-RezJ?utm_source=share&utm_medium=member_desktop",
        },
        {
            imgUrl: "https://res.cloudinary.com/dvuazircp/image/upload/v1697061683/new_portfolio/huggingface_fgpznv.webp",
            title: "Hugging Face Ambassador",
            link: "https://www.linkedin.com/posts/gateremark_machinelearning-huggingface-artificialintelligence-activity-6944601724997238784-RezJ?utm_source=share&utm_medium=member_desktop",
        },
        {
            imgUrl: "https://res.cloudinary.com/dvuazircp/image/upload/v1698216904/new_portfolio/azure_lmxkhu.webp",
            title: "Microsoft Certified: Azure AI Fundamentals",
            link: "https://learn.microsoft.com/en-us/users/gateremark/credentials/F865042F07E63125",
        },
        {
            imgUrl: "https://res.cloudinary.com/dvuazircp/image/upload/v1697066232/new_portfolio/dsaic_flfyo4.webp",
            title: "Data Science and Artificial Intelligence Club, Vice President",
            link: "https://twitter.com/dsaic_dekut",
        },
        {
            imgUrl: "https://res.cloudinary.com/dvuazircp/image/upload/v1697061969/new_portfolio/csok_ue6tpp.webp",
            title: "Computer Society of Kimathi, Vice President",
            link: "https://web.facebook.com/ComputerSocietyOfKimathi",
        },
    ];

    return (
        <motion.div
            id="achievements"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            className="pt-12 flex flex-col ms-auto me-auto w-[95%] md:w-full z-10 text-slate-800"
        >
            <div className="flex flex-col justify-center items-center font-medium">
                <TypingText
                    title="| Achievements"
                    textStyles="text-4xl mb-4 font-semibold"
                />

                <Swiper
                    slidesPerView={1}
                    spaceBetween={40}
                    breakpoints={{
                        601: { slidesPerView: 2 },
                        1025: { slidesPerView: 3 },
                    }}
                    // loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    autoplay={true}
                    className=" w-[80%] mySwiper"
                >
                    {achievementData.map((achievement, index) => (
                        <SwiperSlide
                            key={`achievement-${index}`}
                            className="pt-6 px-6"
                        >
                            <AchievementCard {...achievement} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </motion.div>
    );
};

export default Achievements;
