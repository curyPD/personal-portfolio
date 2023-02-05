import { motion } from "framer-motion";

export default function MobileNav() {
    const navVariants = {
        open: {
            clipPath: `circle(2000px at calc(100% - 40px) 40px)`,
            transition: {
                duration: 0.75,
                type: "tween",
            },
        },
        closed: {
            clipPath: "circle(20px at calc(100% - 40px) 40px)",
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
            className="absolute top-0 right-0 z-30 h-screen w-full bg-white"
        >
            <motion.ul
                variants={ulVariants}
                className="flex h-full w-full flex-col items-center justify-center gap-12"
            >
                <motion.li variants={liVariants}>Home</motion.li>
                <motion.li variants={liVariants}>About</motion.li>
                <motion.li variants={liVariants}>Work</motion.li>
                <motion.li variants={liVariants}>Contact</motion.li>
                <motion.li variants={liVariants}>Resume</motion.li>
            </motion.ul>
        </motion.nav>
    );
}