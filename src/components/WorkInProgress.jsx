export default function WorkInProgress({ onClose }) {
    return (
        <div className="
            min-h-screen
            flex items-center justify-center
            bg-white dark:bg-black
            text-black dark:text-white
        ">
            <div className="
                text-center
                px-4
            ">
                <h1 className="
                    text-4xl md:text-6xl
                    font-bold
                    mb-4
                    text-black dark:text-white
                ">
                    Work in Progress
                </h1>
                <p className="
                    text-lg md:text-xl
                    text-blue
                    font-medium
                    mb-8
                ">
                    Estamos trabajando en algo increíble
                </p>
                <button
                    onClick={onClose}
                    className="
                        text-blue hover:text-blue-700 dark:hover:text-blue-300
                        transition-colors duration-200
                        text-lg font-medium
                        border-2 border-blue hover:border-blue-700 dark:hover:border-blue-300
                        px-6 py-2
                        rounded-lg
                        hover:bg-blue hover:text-white dark:hover:bg-blue-900
                    "
                >
                    Back
                </button>
            </div>
        </div>
    );
}
