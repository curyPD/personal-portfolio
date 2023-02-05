import { motion } from "framer-motion";
import { useState } from "react";
import MobileNavButton from "./MobileNavButton";
import MobileNav from "./MobileNav";
import MobileSocialContainer from "./MobileSocialContainer";

export default function MobileHeader({ socialLinks }) {
    const [isNavVisible, setIsNavVisible] = useState(false);

    return (
        <motion.header
            animate={isNavVisible ? "open" : "closed"}
            className="fixed z-20 h-20 w-full translate-y-0 bg-gray-50/50 backdrop-blur-sm"
        >
            <MobileNavButton
                isNavVisible={isNavVisible}
                setIsNavVisible={setIsNavVisible}
            />
            <MobileNav />
            <MobileSocialContainer socialLinks={socialLinks} />
        </motion.header>
    );
}
