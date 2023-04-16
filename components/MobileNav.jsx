import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageProvider";
import LanguageButton from "./LanguageButton";

export default function MobileNav({
    isNavVisible,
    scrollToHome,
    scrollToAbout,
    scrollToWork,
    scrollToCta,
}) {
    const { lang } = useLanguage();

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

    const props = isNavVisible ? { tabIndex: 0 } : { tabIndex: -1 };

    return (
        <motion.nav
            variants={navVariants}
            className="absolute top-0 right-0 z-30 h-screen w-full bg-gray-50 "
        >
            <motion.ol
                variants={ulVariants}
                className="flex h-full w-full flex-col items-center justify-center gap-8 md:gap-12"
            >
                <motion.li variants={liVariants}>
                    <a
                        onClick={scrollToHome}
                        className="text-2xl font-medium text-gray-800 focus:outline-none focus-visible:text-gray-400 md:text-3xl"
                        href="#"
                        {...props}
                    >
                        {lang === "en" ? "Home" : "Главная"}
                    </a>
                </motion.li>
                <motion.li variants={liVariants}>
                    <a
                        onClick={scrollToAbout}
                        className="text-2xl font-medium text-gray-800 focus:outline-none focus-visible:text-gray-400 md:text-3xl"
                        href="#about"
                        {...props}
                    >
                        {lang === "en" ? "About" : "Обо мне"}
                    </a>
                </motion.li>
                <motion.li variants={liVariants}>
                    <a
                        onClick={scrollToWork}
                        className="text-2xl font-medium text-gray-800 focus:outline-none focus-visible:text-gray-400 md:text-3xl"
                        href="#work"
                        {...props}
                    >
                        {lang === "en" ? "Work" : "Портфолио"}
                    </a>
                </motion.li>
                <motion.li variants={liVariants}>
                    <a
                        onClick={scrollToCta}
                        className="text-2xl font-medium text-gray-800 focus:outline-none focus-visible:text-gray-400 md:text-3xl"
                        href="#cta"
                        {...props}
                    >
                        {lang === "en" ? "Contact" : "Связаться"}
                    </a>
                </motion.li>
                <motion.li variants={liVariants}>
                    <a
                        className="text-2xl font-medium text-gray-800 focus:outline-none focus-visible:text-gray-400 md:text-3xl"
                        href={lang === "en" ? "/resume.pdf" : "/resume-ru.pdf"}
                        target="_blank"
                        rel="noopener noreferrer"
                        {...props}
                    >
                        {lang === "en" ? "Resume" : "Резюме"}
                    </a>
                </motion.li>
                <motion.li variants={liVariants}>
                    <LanguageButton />
                </motion.li>
            </motion.ol>
        </motion.nav>
    );
}
