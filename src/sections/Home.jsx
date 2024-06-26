// import StartPage from "./StartPage";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Navbar from "../components/Navbar";

import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Work from "./Work";
import Blog from "./Blog";
import Achievements from "./Achievements";
import Contact from "./Contact";
import FloatingNav from "../components/FloatingNav";
import { useRef, useState, useEffect } from "react";

function Home() {
    const mainRef = useRef();
    const [showFloatingNav, setShowFloatingNav] = useState(true);
    const [siteYPosition, setSiteYPosition] = useState(0);

    const showFloatingNavHandler = () => {
        setShowFloatingNav(true);
    };
    const hideFloatingNavHandler = () => {
        setShowFloatingNav(false);
    };

    const floatingNavToggleHandler = () => {
        if (
            siteYPosition < mainRef?.current?.getBoundingClientRect().y - 5 ||
            siteYPosition > mainRef?.current?.getBoundingClientRect().y + 5
        ) {
            showFloatingNavHandler();
        } else {
            hideFloatingNavHandler();
        }

        setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
    };

    useEffect(() => {
        const checkYPosition = setInterval(floatingNavToggleHandler, 2000);
        return () => clearInterval(checkYPosition);
    }, [siteYPosition]);

    const particlesInit = async (main) => {
        // console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
    };

    return (
        <div
            className=" transition-all ease-in-out duration-500 2xl:w-full 2xl:flex flex-col justify-center items-center"
            ref={mainRef}
        >
            <div className="2xl:max-w-[1530px]">
                {/* <StartPage /> */}
                <Navbar />
                <Header />
                <About />
                <Projects />
                <Work />
                <Blog />
                <Achievements />
                <Contact />
                {/* <div className="w-full flex justify-center">
                    <span className="text-3xl text-center font-semibold text-white kite-one-regular">
                        Schedule a Call
                    </span>
                </div> */}

                {showFloatingNav && <FloatingNav />}

                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    options={{
                        autoPlay: true,
                        // background: {
                        // 	color: {
                        // 		value: "#071322",
                        // 	},
                        // 	image: "",
                        // 	position: "",
                        // 	repeat: "",
                        // 	size: "",
                        // 	opacity: 1,
                        // },
                        backgroundMask: {
                            composite: "destination-out",
                            cover: {
                                color: {
                                    value: "#fff",
                                },
                                opacity: 1,
                            },
                            enable: false,
                        },
                        backgroundMode: {
                            enable: true,
                            zIndex: -1,
                        },
                        detectRetina: true,
                        fpsLimit: 60,
                        infection: {
                            cure: true,
                            delay: 0,
                            enable: false,
                            infections: 0,
                            stages: [],
                        },
                        interactivity: {
                            detectsOn: "window",
                            events: {
                                onClick: {
                                    enable: false,
                                    mode: [],
                                },
                                onDiv: {
                                    selectors: [],
                                    enable: false,
                                    mode: [],
                                    type: "circle",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                    parallax: {
                                        enable: false,
                                        force: 2,
                                        smooth: 10,
                                    },
                                },
                                resize: false,
                            },
                            modes: {
                                attract: {
                                    distance: 200,
                                    duration: 0.4,
                                    speed: 1,
                                },
                                bounce: {
                                    distance: 200,
                                },
                                bubble: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                                connect: {
                                    distance: 80,
                                    links: {
                                        opacity: 0.5,
                                    },
                                    radius: 60,
                                },
                                grab: {
                                    distance: 100,
                                    links: {
                                        blink: false,
                                        consent: false,
                                        opacity: 1,
                                    },
                                },
                                light: {
                                    area: {
                                        gradient: {
                                            start: {
                                                value: "#ffffff",
                                            },
                                            stop: {
                                                value: "#000000",
                                            },
                                        },
                                        radius: 1000,
                                    },
                                    shadow: {
                                        color: {
                                            value: "#000000",
                                        },
                                        length: 2000,
                                    },
                                },
                                push: {
                                    quantity: 4,
                                },
                                remove: {
                                    quantity: 2,
                                },
                                repulse: {
                                    distance: 100,
                                    duration: 0.4,
                                    speed: 0.5,
                                },
                                slow: {
                                    factor: 3,
                                    radius: 200,
                                },
                                trail: {
                                    delay: 0.005,
                                    quantity: 5,
                                    particles: {
                                        color: {
                                            value: "#5FBFF9",
                                            animation: {
                                                enable: true,
                                                speed: 400,
                                                sync: true,
                                            },
                                        },
                                        collisions: {
                                            enable: false,
                                            bounce: {
                                                horizontal: {
                                                    random: {},
                                                },
                                                vertical: {
                                                    random: {},
                                                },
                                            },
                                        },
                                        links: {
                                            enable: false,
                                            shadow: {},
                                            triangles: {},
                                        },
                                        move: {
                                            outMode: "destroy",
                                            speed: 5,
                                            angle: {},
                                            attract: {
                                                rotate: {},
                                            },
                                            gravity: {},
                                            noise: {
                                                delay: {
                                                    random: {},
                                                },
                                            },
                                            outModes: {},
                                            trail: {},
                                        },
                                        size: {
                                            value: 5,
                                            animation: {
                                                enable: true,
                                                speed: 5,
                                                minimumValue: 1,
                                                sync: true,
                                                startValue: "min",
                                                destroy: "max",
                                            },
                                            random: {},
                                        },
                                        bounce: {
                                            horizontal: {
                                                random: {},
                                            },
                                            vertical: {
                                                random: {},
                                            },
                                        },
                                        life: {
                                            delay: {
                                                random: {},
                                            },
                                            duration: {
                                                random: {},
                                            },
                                        },
                                        number: {
                                            density: {},
                                        },
                                        opacity: {
                                            animation: {},
                                            random: {},
                                        },
                                        rotate: {
                                            animation: {},
                                        },
                                        shadow: {
                                            offset: {},
                                        },
                                        shape: {},
                                        stroke: {
                                            color: {
                                                value: "",
                                                animation: {
                                                    enable: false,
                                                    speed: 0,
                                                    sync: false,
                                                },
                                            },
                                        },
                                        twinkle: {
                                            lines: {},
                                            particles: {},
                                        },
                                    },
                                },
                            },
                        },
                        manualParticles: [],
                        motion: {
                            disable: false,
                            reduce: {
                                factor: 16,
                                value: true,
                            },
                        },
                        particles: {
                            bounce: {
                                horizontal: {
                                    random: {
                                        enable: false,
                                        minimumValue: 12,
                                    },
                                    value: 1,
                                },
                                vertical: {
                                    random: {
                                        enable: false,
                                        minimumValue: 0.1,
                                    },
                                    value: 1,
                                },
                            },
                            collisions: {
                                bounce: {
                                    horizontal: {
                                        random: {
                                            enable: false,
                                            minimumValue: 0.1,
                                        },
                                        value: 1,
                                    },
                                    vertical: {
                                        random: {
                                            enable: false,
                                            minimumValue: 0.1,
                                        },
                                        value: 1,
                                    },
                                },
                                enable: true,
                                mode: "bounce",
                            },
                            color: {
                                value: ["#00c431", "#03dac6"],
                                animation: {
                                    enable: false,
                                    speed: 100,
                                    sync: false,
                                },
                            },
                            life: {
                                count: 37,
                                delay: {
                                    random: {
                                        enable: false,
                                        minimumValue: 0,
                                    },
                                    value: 0,
                                    sync: false,
                                },
                                duration: {
                                    random: {
                                        enable: false,
                                        minimumValue: 0.0001,
                                    },
                                    value: 0,
                                    sync: true,
                                },
                            },
                            links: {
                                blink: true,
                                color: {
                                    value: "random",
                                },
                                consent: false,
                                distance: 100,
                                enable: true,
                                frequency: 0,
                                opacity: 1,
                                shadow: {
                                    blur: false,
                                    color: {
                                        value: "#5FBFF9",
                                    },
                                    enable: false,
                                },
                                triangles: {
                                    enable: false,
                                    frequency: 0,
                                },
                                width: 1,
                                warp: false,
                            },
                            move: {
                                angle: {
                                    offset: 45,
                                    value: 90,
                                },
                                attract: {
                                    enable: false,
                                    rotate: {
                                        x: 3000,
                                        y: 3000,
                                    },
                                },
                                direction: "none",
                                distance: 0,
                                enable: true,
                                gravity: {
                                    acceleration: 9.81,
                                    enable: false,
                                    maxSpeed: 50,
                                },
                                noise: {
                                    delay: {
                                        random: {
                                            enable: false,
                                            minimumValue: 0,
                                        },
                                        value: 0,
                                    },
                                    enable: false,
                                },
                                outModes: {
                                    default: "out",
                                },
                                random: false,
                                size: false,
                                speed: 2,
                                straight: false,
                                trail: {
                                    enable: false,
                                    length: 10,
                                    fillColor: {
                                        value: "#5FBFF9",
                                    },
                                },
                                vibrate: false,
                                warp: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                    factor: 1000,
                                },
                                limit: 0,
                                value: 150,
                            },
                            opacity: {
                                random: {
                                    enable: true,
                                    minimumValue: 0.3,
                                },
                                value: 0.8,
                                animation: {
                                    enable: true,
                                    minimumValue: 0.3,
                                    speed: 0.5,
                                    sync: false,
                                },
                            },
                            reduceDuplicates: false,
                            rotate: {
                                random: false,
                                value: 0,
                                animation: {
                                    enable: false,
                                    speed: 0,
                                    sync: false,
                                },
                                direction: "clockwise",
                                path: false,
                            },
                            shadow: {
                                blur: 51,
                                color: {
                                    value: "#5FBFF9",
                                },
                                enable: false,
                                offset: {
                                    x: 0,
                                    y: 0,
                                },
                            },
                            shape: {
                                options: {},
                                type: "circle",
                            },
                            size: {
                                random: {
                                    enable: true,
                                    minimumValue: 1,
                                },
                                value: 3,
                                animation: {
                                    destroy: "none",
                                    enable: true,
                                    minimumValue: 1,
                                    speed: 3,
                                    startValue: "max",
                                    sync: false,
                                },
                            },
                            stroke: {
                                width: 0,
                                color: {
                                    value: "",
                                    animation: {
                                        enable: false,
                                        speed: 0,
                                        sync: false,
                                    },
                                },
                            },
                            twinkle: {
                                lines: {
                                    enable: false,
                                    frequency: 0.05,
                                    opacity: 1,
                                },
                                particles: {
                                    enable: false,
                                    frequency: 13,
                                    opacity: 1,
                                },
                            },
                        },
                        pauseOnBlur: false,
                        pauseOnOutsideViewport: true,
                        themes: [],
                    }}
                />
            </div>
        </div>
    );
}

export default Home;
