import { useLanguage } from "@/context/LanguageProvider";
import LanguageButton from "./LanguageButton";

export default function DesktopNav({
    scrollToHome,
    scrollToAbout,
    scrollToWork,
    scrollToCta,
}) {
    const { lang } = useLanguage();

    return (
        <nav>
            <ol className="flex items-center gap-4 2xl:gap-5">
                <li>
                    <a
                        onClick={scrollToHome}
                        className="text-base font-medium text-gray-500 transition-colors duration-100 focus:outline-none focus-visible:text-gray-900 hover:text-gray-900 2xl:text-lg"
                        href="#"
                    >
                        {lang === "en" ? "Home" : "Главная"}
                    </a>
                </li>
                <li>
                    <a
                        onClick={scrollToAbout}
                        className="text-base font-medium text-gray-500 transition-colors duration-100 focus:outline-none focus-visible:text-gray-900 hover:text-gray-900 2xl:text-lg"
                        href="#about"
                    >
                        {lang === "en" ? "About" : "Обо мне"}
                    </a>
                </li>
                <li>
                    <a
                        onClick={scrollToWork}
                        className="text-base font-medium text-gray-500 transition-colors duration-100 focus:outline-none focus-visible:text-gray-900 hover:text-gray-900 2xl:text-lg"
                        href="#work"
                    >
                        {lang === "en" ? "Work" : "Портфолио"}
                    </a>
                </li>
                <li>
                    <a
                        onClick={scrollToCta}
                        className="text-base font-medium text-gray-500 transition-colors duration-100 focus:outline-none focus-visible:text-gray-900 hover:text-gray-900 2xl:text-lg"
                        href="#contact"
                    >
                        {lang === "en" ? "Contact" : "Связаться"}
                    </a>
                </li>
                <li>
                    <a
                        className="text-base font-medium text-gray-500 transition-colors duration-100 focus:outline-none focus-visible:text-gray-900 hover:text-gray-900 2xl:text-lg"
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {lang === "en" ? "Resume" : "Резюме"}
                    </a>
                </li>
                <LanguageButton />
            </ol>
        </nav>
    );
}
