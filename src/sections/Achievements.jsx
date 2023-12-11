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
        },
        {
            imgUrl: "https://res.cloudinary.com/dvuazircp/image/upload/v1697061515/new_portfolio/mlsa_ruvsls.webp",
            title: "Microsoft Learn Student Ambassador",
        },
        {
            imgUrl: "https://res.cloudinary.com/dvuazircp/image/upload/v1697061470/new_portfolio/emai_lfxjtq.webp",
            title: "Keynote Speaker, EnhanceMind AI Conference",
        },
        {
            imgUrl: "https://res.cloudinary.com/dvuazircp/image/upload/v1702278864/new_portfolio/globalai_cz5o7m.svg",
            title: "Host, Global AI Conference - Student Edition",
        },
        {
            imgUrl: "https://res.cloudinary.com/dvuazircp/image/upload/v1697061541/new_portfolio/ysk_fwqpaf.webp",
            title: "Young Scientists Kenya, Mentor",
        },
        {
            imgUrl: "https://res.cloudinary.com/dvuazircp/image/upload/v1697061565/new_portfolio/zindi_klkyw3.webp",
            title: "Zindi - Kenya Student Ambassador",
        },
        {
            imgUrl: "https://res.cloudinary.com/dvuazircp/image/upload/v1697061683/new_portfolio/huggingface_fgpznv.webp",
            title: "Hugging Face Ambassador",
        },
        {
            imgUrl: "https://res.cloudinary.com/dvuazircp/image/upload/v1697066232/new_portfolio/dsaic_flfyo4.webp",
            title: "Data Science and Artificial Intelligence Club, Vice President",
        },
        {
            imgUrl: "https://res.cloudinary.com/dvuazircp/image/upload/v1697061969/new_portfolio/csok_ue6tpp.webp",
            title: "Computer Society of Kimathi, Vice President",
        },
    ];

    return (
        <motion.div
            id="achievements"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            className="pt-12 flex flex-col ms-auto me-auto w-[95%] md:w-full z-10"
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
