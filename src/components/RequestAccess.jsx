import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function RequestAccess({ projectName, onClose }) {
    const subject = encodeURIComponent(`Demo request - ${projectName}`);
    const body = encodeURIComponent(
        `Hi Marcos,\n\nI'd like to try the ${projectName} system. Could you grant me access?\n\nThanks!`
    );
    const mailto = `mailto:marcos.bernal.oficial.1@gmail.com?subject=${subject}&body=${body}`;

    return (
        <div className="
            min-h-screen
            flex items-center justify-center
            bg-white dark:bg-black
            text-black dark:text-white
        ">
            <div className="
            absolute
            w-full h-full
            bg-gradient-to-tr from-[#9a9cff] via-[#c4e6fa] to-[#c8c2fb]
            "></div>
            <div className="
                text-center
                p-10 md:p-16
                max-w-[90dvw] md:max-w-[40rem]
                bg-white/20
                backdrop-blur-md
                border border-black/10
                rounded-xl
                text-black
            ">
                <h1 className="
                    text-3xl md:text-5xl
                    font-bold
                    mb-4
                ">
                    {projectName}
                </h1>
                <p className="
                    text-lg md:text-xl
                    font-medium
                    mb-8 text-balance
                ">
                    This is a fully functional system, not a mockup. To protect its
                    data, the live demo isn't open to the public. If you'd like to try
                    it, please get in touch and I'll give you access.
                </p>
                <div className="
                    flex flex-row justify-center items-center gap-4
                    mb-8
                ">
                    <a
                        href={mailto}
                        className="
                            flex flex-row items-center gap-2
                            text-lg font-medium
                            border-2 border-black
                            px-6 py-2
                            rounded-lg
                            transition-colors duration-200
                            hover:bg-black hover:text-white
                        "
                    >
                        <FontAwesomeIcon icon={faEnvelope} />
                        Email me
                    </a>
                    <a
                        href="https://www.linkedin.com/in/marcos-bernal-b13a20355"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            flex flex-row items-center gap-2
                            text-lg font-medium
                            border-2 border-black
                            px-6 py-2
                            rounded-lg
                            transition-colors duration-200
                            hover:bg-black hover:text-white
                        "
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                        LinkedIn
                    </a>
                </div>
                <button
                    onClick={onClose}
                    className="
                        text-black hover:text-blue-700
                        transition-colors duration-200
                        text-lg font-medium
                        border-2 border-black hover:border-blue-700
                        px-6 py-2
                        rounded-lg
                        hover:bg-black hover:text-white
                    "
                >
                    Back
                </button>
            </div>
        </div>
    );
}
