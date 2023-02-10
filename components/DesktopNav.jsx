export default function DesktopNav({
    scrollToHome,
    scrollToAbout,
    scrollToWork,
    scrollToCta,
}) {
    return (
        <nav>
            <ol className="flex items-center gap-4 2xl:gap-5">
                <li>
                    <a
                        onClick={scrollToHome}
                        className="text-base font-medium text-gray-500 transition-colors duration-100 hover:text-gray-900 focus:outline-none focus-visible:text-gray-900 2xl:text-lg"
                        href="#"
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        onClick={scrollToAbout}
                        className="text-base font-medium text-gray-500 transition-colors duration-100 hover:text-gray-900 focus:outline-none focus-visible:text-gray-900 2xl:text-lg"
                        href="#about"
                    >
                        About
                    </a>
                </li>
                <li>
                    <a
                        onClick={scrollToWork}
                        className="text-base font-medium text-gray-500 transition-colors duration-100 hover:text-gray-900 focus:outline-none focus-visible:text-gray-900 2xl:text-lg"
                        href="#work"
                    >
                        Work
                    </a>
                </li>
                <li>
                    <a
                        onClick={scrollToCta}
                        className="text-base font-medium text-gray-500 transition-colors duration-100 hover:text-gray-900 focus:outline-none focus-visible:text-gray-900 2xl:text-lg"
                        href="#contact"
                    >
                        Contact
                    </a>
                </li>
                <li>
                    <a
                        className="text-base font-medium text-gray-500 transition-colors duration-100 hover:text-gray-900 focus:outline-none focus-visible:text-gray-900 2xl:text-lg"
                        href="#"
                    >
                        Resume
                    </a>
                </li>
            </ol>
        </nav>
    );
}
