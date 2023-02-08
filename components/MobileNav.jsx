import { motion } from "framer-motion";

export default function MobileNav({
    scrollToHome,
    scrollToAbout,
    scrollToWork,
    scrollToCta,
}) {
    const navVariants = {
        open: {
            clipPath: `circle(2000px at calc(100% - 40px) 32px)`,
            transition: {
                duration: 0.75,
                type: "tween",
            },
        },
        closed: {
            clipPath: "circle(20px at calc(100% - 40px) 32px)",
            transition: {
                duration: 0.4,
                type: "tween",
            },
        },
    };

    const ulVariants = {
        open: {
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.05,
            },
        },
        closed: {
            transition: {
                staggerChildren: 0.03,
                staggerDirection: -1,
            },
        },
    };

    const liVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 500,
            },
        },
        closed: {
            opacity: 0,
            y: 50,
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 500,
            },
        },
    };
    return (
        <motion.nav
            variants={navVariants}
            className="absolute top-0 right-0 z-30 h-screen w-full bg-gray-50 "
        >
            <motion.ul
                variants={ulVariants}
                className="flex h-full w-full flex-col items-center justify-center gap-12"
            >
                <motion.li variants={liVariants}>
                    <a
                        onClick={scrollToHome}
                        className="text-3xl font-medium text-gray-800"
                        href="#"
                    >
                        Home
                    </a>
                </motion.li>
                <motion.li variants={liVariants}>
                    <a
                        onClick={scrollToAbout}
                        className="text-3xl font-medium text-gray-800"
                        href="#about"
                    >
                        About
                    </a>
                </motion.li>
                <motion.li variants={liVariants}>
                    <a
                        onClick={scrollToWork}
                        className="text-3xl font-medium text-gray-800"
                        href="#work"
                    >
                        Work
                    </a>
                </motion.li>
                <motion.li variants={liVariants}>
                    <a
                        onClick={scrollToCta}
                        className="text-3xl font-medium text-gray-800"
                        href="#cta"
                    >
                        Contact
                    </a>
                </motion.li>
                <motion.li variants={liVariants}>
                    <a className="text-3xl font-medium text-gray-800" href="#">
                        Resume
                    </a>
                </motion.li>
            </motion.ul>
        </motion.nav>
    );
}
