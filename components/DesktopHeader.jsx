export default function DesktopHeader() {
    return (
        <header className="fixed right-[max(0px,calc(50%_-_47rem))] top-1/2 z-20 hidden w-24 -translate-y-1/2 xl:block">
            <nav>
                <ul className="flex flex-col items-end gap-2 px-6 2xl:gap-4">
                    <li>
                        <a
                            className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 2xl:text-lg"
                            href="#"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 2xl:text-lg"
                            href="#about"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 2xl:text-lg"
                            href="#work"
                        >
                            Work
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 2xl:text-lg"
                            href="#"
                        >
                            Contact
                        </a>
                    </li>
                    {/* <li>
                        <a
                            className="text-sm font-medium text-gray-500 2xl:text-base"
                            href="#"
                        >
                            Resume
                        </a>
                    </li> */}
                </ul>
            </nav>
        </header>
    );
}
