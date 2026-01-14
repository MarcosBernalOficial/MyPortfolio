
import { useState } from "react";

import WorkInProgress from "./WorkInProgress"; 

export default function Dashboard() {
    const [showWorkInProgress, setShowWorkInProgress] = useState(false);
    const [currentProject, setCurrentProject] = useState("");

    const handleProjectClick = (projectName) => {
        setCurrentProject(projectName);
        setShowWorkInProgress(true);
    };

    const handleCloseWorkInProgress = () => {
        setShowWorkInProgress(false);
        setCurrentProject("");
    };

    const data = [
        {
            title: "Back-end",
            description: "I graduated from the National Technological University of Mar del Plata with a strong focus on back-end development, enabling me to build robust and fully integrated full-stack web applications."
        },
        {
            title: "Front-end",
            description: "I specialized in front-end development, gaining solid expertise in building responsive, interactive, and maintainable web interfaces with modern technologies and best coding practices."
        },
        {
            title: "Why",
            description: "As a programmer and front-end developer, I’m driven by the goal of making technology useful and approachable. I enjoy building clean, responsive, and accessible interfaces that help people solve real problems in a simple and intuitive way."
        },
    ];

    const sections = [
        {
            title: "Languages & Frameworks",
            items: ["MySQL", "Java", "Spring", "HTML5", "CSS", "JavaScript", "React"],
        },
        {
            title: "Design Tools",
            items: ["Figma", "Photoshop", "Illustrator"],
        },
        {
            title: "Necessary Tools",
            items: ["Git/Github", "Scrum", "Jira", "English", "Spanish"],
        },
        {
            title: "Soft Skills",
            items: ["Problem-solving", "Adaptability", "Teamwork & collaboration", "Communication skills", "Time management", "Critical thinking"],
        },
    ];

    const proyects = [
        {
            title: "La Gaviota",
            subtitle: "landing-page - restaurant - 2025",
            tools: ["Html", "Css", "Tailwind", "JavaScript", "React"],
            linkUrl: "https://lagaviotamdp.com",
            description: "Responsive restaurant landing page with menu and information about La Gaviota. Built with React for optimal mobile experience and high performance.",
        },
        {
            title: "BunchPay",
            subtitle: "wallet online - 2025",
            tools: ["PostgreSQL", "Java", "Spring", "Html", "Css", "Tailwind", "JavaScript", "Angular", "Figma"],
            linkUrl: "",
            description: "Digital wallet platform enabling secure payments, fund transfers, real-time balance tracking and other functions. Built with Angular, Java, Spring for seamless financial management.",
        },
    ];

    return (
        <div className="
        md:full max-w-7xl mx-auto my-10
        flex flex-col justify-between items-start
        text-black dark:text-white
        px-5 lg:px-0
        cursor-default
        ">

            <div className="
                flex flex-col justify-between gap-2 
            ">
                <h2 className="
                    text-7xl font-bold text-start md:text-start
                ">
                    Bernal Marcos
                </h2>
                <h3 className="
                    text-3xl font-semibold text-blue text-center md:text-start font-title
                    pb-3
                ">
                    Full-Stack developer & UX/UI designer
                </h3>
                <p className="text-xl font-medium text-balance text-center md:text-start max-w-[30rem]">
                    Building scalable, user-centered web applications with modern technologies. Specialized in ReactJS, responsive design, and seamless user experiences.
                </p>
            </div>

            <div className="
                flex flex-row justify-evenly items-start flex-wrap md:flex-nowrap gap-5
                my-14 w-full 
                border-x border-black/20 dark:border-white/20
            "> {data.map((item, i) => (
                <div 
                key={i}
                className="
                        flex flex-col justify-start 
                        max-w-md py-5 px-3
                ">
                    <h3 className="
                        font-semibold text-2xl text-blue text-center md:text-center font-title
                        pb-2 
                    ">
                        {item.title}
                    </h3>
                    <p className="
                        text-md font-medium max-w-[20rem] text-center md:text-center text-balance
                    ">
                        {item.description}
                    </p>
                </div>
            ))}
                
            </div>



            <div className="
                flex flex-col justify-center items-center flex-wrap md:flex-nowrap gap-5
                w-full 
                border-x border-black/20 dark:border-white/20 
                px-1 md:px-0
            "> {sections.map((section, index) => (
                <div
                key={index}
                className="
                    flex flex-col justify-center items-center gap-1
                    w-full my-2
                ">
                    <h4 className="
                        font-semibold text-2xl pb-2 font-title
                    ">
                        {section.title}
                    </h4>
                    <ul className="
                        flex flex-row justify-center items-center gap-5 flex-wrap
                    "> {section.items.map((item, i) => (
                        <li
                        key={i}
                        className="
                            font-medium text-md text-white dark:text-white
                            bg-blue
                            py-1 px-3
                            rounded-lg
                        ">
                            {item}
                        </li>
                    ))}
                    </ul>
                </div>
            ))}
            </div>



            <div className="
                flex flex-col justify-center items-center gap-5
                mt-14
                w-full
                text-black dark:text-white
            "> 
                <h3 className="
                    text-center font-semibold text-5xl text-blue font-title
                    my-4
                ">
                    Proyects
                </h3>
            {proyects.map((proyect, index) => (
                <div
                    key={index}
                    onClick={() => {
                        if (proyect.linkUrl) {
                            window.open(proyect.linkUrl, "_blank", "noopener,noreferrer");
                        } else {
                            handleProjectClick(proyect.title);
                        }
                    }}
                    className="
                        w-full
                        relative
                        md:border-l border-black/20 dark:border-white/20
                        md:max-h-[250px]
                        cursor-pointer
                        transition-all duration-300 hover:scale-[1.01] hover:border-l hover:border-blue dark:hover:border-blue
                    "
                    tabIndex={0}
                    role="button"
                    aria-label={proyect.title}
                >
                    <h5 className="
                        font-semibold text-2xl text-center md:text-start font-title
                        pt-5 pl-5
                    ">{proyect.title}</h5>
                    <h6 className="
                        font-medium pb-2 text-center md:text-start text-blue
                        pl-5
                    ">{proyect.subtitle}</h6>
                    <ul className="
                        flex flex-row gap-5 flex-wrap items-center justify-center md:justify-start 
                        md:max-w-[60%] w-full px-5
                    "> {proyect.tools.map((tool, i) => (
                        <li
                            key={i}
                            className="
                                font-medium text-md
                                text-black dark:text-white
                                border border-black/20 dark:border-white/20
                                py-1 px-3
                                rounded-lg 
                            "
                        >{tool}</li>
                    ))}
                    </ul>
                    <p
                        className="
                        font-medium
                        w-[100%] md:w-[70%]
                        text-center md:text-start
                        mt-2 ml-none md:mt-5 md:ml-5 hover:text-blue dark:hover:text-blue transition-all duration-300
                        "
                    >{proyect.description}</p>
                </div>
            ))}
            </div>

            <div className="
                flex flex-col justify-center
                w-full h-auto
                md:border-l-8 md:border-blue
                md:mt-14
                text-black dark:text-white
            ">
                <h3 className="
                    text-center md:text-start font-semibold md:text-5xl text-3xl font-title
                    text-blue
                    mt-5
                    px-5
                ">
                    Nowadays
                </h3>
                <p className="
                    md:text-xl text-md text-center md:text-start
                    p-5 text-balance
                ">
                    I am currently enhancing my skills in JavaScript and React, deepening my knowledge to build modern and dynamic web applications. At the same time, I am learning Astro to create fast, optimized static websites, exploring MCP (Model Context Protocol) for advanced integrations, and studying AI agents to develop intelligent, automated, and interactive solutions.
                </p>
            </div>

            <div className="
                flex flex-1 md:justify-start justify-center items-center
                w-full
                my-10 md:p-7
            ">
                <h3 className="
                    font-title text-blue md:text-2xl text-lg
                    text-center text-balance 
                    hover:scale-[1.01] transition-all duration-300
                ">
                    Let's Build Something Great Together I'm currently open to frontend and full-stack development opportunities where I can contribute to building scalable, user-focused applications. If you're looking for a developer who combines technical expertise with design sensibility and a commitment to quality, let's connect.
                </h3>
            </div>

            {showWorkInProgress && (
                <div className="fixed inset-0 z-50">
                    <div 
                        className="absolute inset-0 bg-black bg-opacity-50"
                        onClick={handleCloseWorkInProgress}
                    ></div>
                    <div className="relative z-10">
                        <WorkInProgress onClose={handleCloseWorkInProgress} />
                    </div>
                </div>
            )}
        </div>
    );
}
