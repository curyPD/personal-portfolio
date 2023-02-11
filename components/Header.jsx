import { motion } from "framer-motion";
import MobileNavButton from "./MobileNavButton";
import MobileNav from "./MobileNav";
import MobileSocialContainer from "./MobileSocialContainer";
import DesktopNav from "./DesktopNav";
import DesktopSocialContainer from "./DesktopSocialContainer";
import { useScrollDirection } from "@/hooks/useScrollDirection";

export default function Header({
    socialLinks,
    scrollToHome,
    scrollToAbout,
    scrollToWork,
    scrollToCta,
    isNavVisible,
    setIsNavVisible,
}) {
    const scrollDirection = useScrollDirection();
    return (
        <header
            className={`fixed z-20 w-full bg-gray-50/70 backdrop-blur-sm transition-transform duration-300 ${
                scrollDirection === "up" ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <motion.div
                animate={isNavVisible ? "open" : "closed"}
                initial="closed"
                className="h-16 lg:hidden"
            >
                <MobileNavButton
                    isNavVisible={isNavVisible}
                    setIsNavVisible={setIsNavVisible}
                />
                <MobileSocialContainer
                    isNavVisible={isNavVisible}
                    socialLinks={socialLinks}
                />
                <MobileNav
                    isNavVisible={isNavVisible}
                    scrollToHome={scrollToHome}
                    scrollToAbout={scrollToAbout}
                    scrollToWork={scrollToWork}
                    scrollToCta={scrollToCta}
                />
            </motion.div>
            <div className="mx-auto hidden h-16 max-w-3xl items-center justify-between gap-6 px-5 lg:flex xl:max-w-4xl 2xl:max-w-6xl">
                <DesktopSocialContainer socialLinks={socialLinks} />
                <DesktopNav
                    scrollToHome={scrollToHome}
                    scrollToAbout={scrollToAbout}
                    scrollToWork={scrollToWork}
                    scrollToCta={scrollToCta}
                />
            </div>
        </header>
    );
}
