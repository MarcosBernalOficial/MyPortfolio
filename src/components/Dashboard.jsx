import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import woodcliffLight from "../assets/images/woodcliff-white.png";
import woodcliffDark from "../assets/images/woodcliff-black.png";
import squieroLight from "../assets/images/squiero-white.png";
import squieroDark from "../assets/images/squiero-black.png";
import lagaviotaLight from "../assets/images/lagaviota-white.png";
import lagaviotaDark from "../assets/images/lagaviota-black.png"; 

export default function Dashboard() {

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
            items: ["Problem-solving", "Communication skills", "Teamwork & collaboration", "Adaptability", "Time management", "Critical thinking"],
        },
    ];

    const proyects = [
        {
            title: "SQuiero",
            subtitle: "e-commerce - full-stack - bags - 2025",
            tools: ["PostgreSQL", "Java", "Spring", "Html", "Css", "Tailwind", "JavaScript", "React", "Figma", "Photoshop"],
            linkUrl: "",
            imageLight: squieroLight,
            imageDark: squieroDark,
        },
        {
            title: "Woodcliff",
            subtitle: "e-commerce - full-stack - wood - 2025",
            tools: ["PostgreSQL", "Java", "Spring", "Html", "Css", "Tailwind", "JavaScript", "React", "Figma"],
            linkUrl: "",
            imageLight: woodcliffLight,
            imageDark: woodcliffDark,
        },
        {
            title: "La Gaviota",
            subtitle: "landing-page - restaurant - 2025",
            tools: ["Html", "Css", "Tailwind", "JavaScript", "React"],
            linkUrl: "",
            imageLight: lagaviotaLight,
            imageDark: lagaviotaDark,
        },
    ];

    return (
        <div className="
        md:full max-w-7xl mx-auto my-10
        flex flex-col justify-between items-start
        text-black dark:text-white
        px-5 lg:px-0
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
                    I'm from Argentina, passionate about creating clean, responsive, and user-friendly web experiences.
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
                        font-semibold text-2xl text-blue text-center md:text-start font-title
                        pb-2 
                    ">
                        {item.title}
                    </h3>
                    <p className="
                        text-md font-medium max-w-[20rem] text-center md:text-start
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
                    text-center font-semibold text-4xl text-blue font-title
                    my-4
                ">
                    Proyects
                </h3>
            {proyects.map((proyect, index) => (
                <div 
                key={index}
                className="
                    w-full
                    relative
                    border border-black/20 dark:border-white/20
                    md:h-[250px]
                ">
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

                        ">{tool}</li>
                    ))}
                    </ul>
                    <a
                    href={proyect.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        text-black dark:text-white hover:text-blue dark:hover:text-blue 
                        transition-all duration-300
                        pl-5
                        absolute bottom-0 left-0 z-10
                        hover:scale-110 
                    ">
                        <FontAwesomeIcon className="my-4 size-6" icon={faArrowUpRightFromSquare} />
                    </a>
                    <img 
                        src={proyect.imageLight} 
                        alt={`${proyect.title} light`} 
                        className="
                            md:w-[40%] w-full md:h-full h-full
                            md:top-0 md:right-0 md:absolute
                            flex 
                            md:block md:dark:hidden md:object-contain 
                            md:border-l md:border-black/20
                        "/>
                    <img 
                        src={proyect.imageDark} 
                        alt={`${proyect.title} dark`} 
                        className="
                            md:max-w-[40%] w-full md:h-full
                            md:absolute md:top-0 md:right-0
                            hidden dark:block object-contain
                            md:border-l md:border-white/20
                        "/>
                </div>
            ))}
            </div>

            <div className="
                flex flex-1 w-full justify-center items-center
                my-10
            ">
                <h3 className="
                    font-title text-black dark:text-white text-5xl
                    text-center
                ">
                    You should work with me, I will make your life easier.
                </h3>
            </div>
        </div>
    );
}
