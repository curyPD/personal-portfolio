import { motion } from "framer-motion";

export default function MobileNavButton({ isNavVisible, setIsNavVisible }) {
    const buttonVariants = {
        open: {
            rotate: 360,
            transition: {
                duration: 0.5,
                type: "tween",
            },
            y: "-50%",
        },
        closed: {
            rotate: 0,
            transition: {
                duration: 0.45,
                type: "tween",
            },
            y: "-50%",
        },
    };

    return (
        <motion.button
            aria-label="Toggle mobile navigation menu"
            variants={buttonVariants}
            onClick={() => setIsNavVisible((prevState) => !prevState)}
            className={`absolute top-1/2 right-5 z-50 h-10 w-10 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 ${
                isNavVisible ? "bg-gray-900" : "bg-transparent"
            }`}
        >
            <span
                className={`absolute left-1/2 top-1/2 h-1 w-5 origin-center -translate-x-1/2 scale-y-50 transition-all ${
                    isNavVisible
                        ? "-translate-y-1/2 rotate-45 bg-white"
                        : "-translate-y-2 rotate-0 bg-gray-900"
                }`}
            >
                &nbsp;
            </span>
            <span
                className={`absolute left-1/2 top-1/2 h-1 w-5 -translate-x-1/2 -translate-y-1/2 scale-y-50 transition-all ${
                    isNavVisible
                        ? "bg-white opacity-0"
                        : "opacity-1 bg-gray-900"
                }`}
            >
                &nbsp;
            </span>
            <span
                className={`absolute left-1/2 top-1/2 h-1 w-5 origin-center -translate-x-1/2 scale-y-50 transition-all ${
                    isNavVisible
                        ? "-translate-y-1/2 -rotate-45 bg-white"
                        : "translate-y-full rotate-0 bg-gray-900"
                }`}
            >
                &nbsp;
            </span>
        </motion.button>
    );
}
