import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
export default function Footer() {

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (saved === "dark") {
            document.documentElement.classList.add("dark");
            setDarkMode(true);
        }
    }, []);

    const toggleDarkMode = () => {
        const isDark = document.documentElement.classList.toggle("dark");
        setDarkMode(isDark);
        localStorage.setItem("theme", isDark ? "dark" : "light");
    };

    return (
        <div className="
            fixed bottom-0 w-full z-30
            py-5 px-10
            bg-white/10 dark:bg-black/10
            backdrop-blur-md
            border-t border-black/10 dark:border-white/10
            flex flex-row justify-between items-center
        ">
            <div className="
                flex flex-row justify-evenly items-center gap-5 
                md:mr-10 md:px-4 py-2
            ">
                <button 
                onClick={toggleDarkMode}
                className="
                    bg-transparent hover:bg-black dark:hover:bg-white
                    h-9 w-9 hover:scale-110
                    border-2 border-black dark:border-white rounded-full hover:border-blue hover:dark:border-blue
                    transition-all duration-300
                    relative overflow-hidden
                ">
                    <div className="
                        h-9 w-9
                        bg-black dark:bg-white
                        top-3 absolute right-3 z-[-1]
                        rounded-full
                    "></div>
                    <div className="
                        h-9 w-9
                        bg-black/75 dark:bg-white/75
                        top-3 absolute left-3 z-[-2]
                        rounded-full
                    "></div>
                </button>
                <a
                    href="https://drive.google.com/file/d/1msYNDHtnx4pKUCis_nusMm_0XFPTowtb/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        text-xl font-semibold text-black dark:text-white hover:text-blue dark:hover:text-blue font-title
                        hover:bg-black dark:hover:bg-white
                        px-4 py-1 hover:scale-110
                        border-2 border-black dark:border-white rounded-lg hover:border-blue hover:dark:border-blue
                        transition-all duration-300 inline-block text-center
                    ">
                    Resume
                </a>
            </div>

            <ul className="
                flex flex-row justify-evenly gap-5 
                ml-5 md:mr-10 px-4 py-2
            ">
                <li>
                    <a
                        href="https://www.linkedin.com/in/marcos-bernal-b13a20355"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                        icon={faLinkedin}
                        className="text-black dark:text-white text-3xl hover:scale-110 hover:text-blue dark:hover:text-blue transition-all duration-300"
                        />
                    </a>
                    </li>
                    <li>
                    <a
                        href="https://github.com/MarcosBernalOficial"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                        icon={faGithub}
                        className="text-black dark:text-white text-3xl hover:scale-110 hover:text-blue dark:hover:text-blue transition-all duration-300"
                        />
                    </a>
                    </li>
                    <li>
                    <a
                        href="mailto:marcos.bernal.oficial.1@gmail.com"
                    >
                        <FontAwesomeIcon
                        icon={faEnvelope}
                        className="text-black dark:text-white text-3xl hover:scale-110 hover:text-blue dark:hover:text-blue transition-all duration-300"
                        />
                    </a>
                </li>
            </ul>
        </div>
    )
}