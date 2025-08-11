export default function WorkInProgress({ onClose }) {
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
                p-20
                max-w-[90dvw]
                bg-white/20 
                backdrop-blur-md
                border border-black/10
                rounded-xl
            ">
                <h1 className="
                    text-4xl md:text-6xl
                    font-bold
                    mb-8
                    text-black 
                ">
                    Work in Progress...
                </h1>
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
