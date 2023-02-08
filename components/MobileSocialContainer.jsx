import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { SiLinkedin, SiTwitter, SiFacebook, SiGithub } from "react-icons/si";

export default function MobileSocialContainer({ socialLinks }) {
    const [socialIcons, setSocialIcons] = useState([]);

    const socialContainerVariants = {
        open: {
            transition: {
                delayChildren: 0.1,
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

    const socialVariants = {
        open: (translate) => ({
            opacity: 1,
            x: `calc(-50vw + 20px + ${translate})`,
            y: "-50%",
            transition: {
                type: "tween",
            },
        }),
        closed: {
            opacity: 0,
            x: "0",
            y: "-50%",

            transition: {
                type: "tween",
            },
        },
    };

    function calculateTranslateValueOfArrayItem(i, length, itemWidth, gap) {
        let translate;
        const isOdd = length % 2 !== 0;
        if (isOdd) {
            if (i + 1 <= Math.floor(length / 2)) {
                // Element in the first half of array => return negative value
                translate = `50% - ${
                    (gap + itemWidth) * (Math.floor(length / 2) - i)
                }px`;
            } else if (
                i + 1 > Math.floor(length / 2) &&
                i + 1 !== Math.ceil(length / 2)
            ) {
                // Element in the second half of array => return positive value
                translate = `50% + ${
                    (gap + itemWidth) * (i - Math.floor(length / 2))
                }px`;
            } else {
                // Element in the middle
                translate = "50%";
            }
        } else {
            if (i + 1 <= length / 2) {
                // Element in the first half of array => return negative value
                translate = `0px - ${
                    gap / 2 +
                    (length / 2 - (i + 1)) * itemWidth +
                    gap * (length / 2 - (i + 1))
                }px`;
            } else if (i + 1 > length / 2) {
                // Element in the second half of array => return positive value
                translate = `${
                    itemWidth +
                    gap / 2 +
                    (i - length / 2) * itemWidth +
                    gap * (i - length / 2)
                }px`;
            }
        }
        return translate;
    }

    useEffect(() => {
        setSocialIcons(
            socialLinks.map((socialLink, i, arr) => {
                const translate = calculateTranslateValueOfArrayItem(
                    i,
                    arr.length,
                    window.innerWidth < 640
                        ? 24
                        : window.innerWidth >= 640 && window.innerWidth < 768
                        ? 28
                        : 32,
                    window.innerWidth < 640
                        ? 20
                        : window.innerWidth >= 640 && window.innerWidth < 768
                        ? 24
                        : 28
                );
                let icon;
                if (socialLink.title.toLowerCase() === "linkedin")
                    icon = (
                        <SiLinkedin className="h-6 w-6 text-gray-400 sm:h-7 sm:w-7 md:h-8 md:w-8" />
                    );
                else if (socialLink.title.toLowerCase() === "twitter")
                    icon = (
                        <SiTwitter className="h-6 w-6 text-gray-400 sm:h-7 sm:w-7 md:h-8 md:w-8" />
                    );
                else if (socialLink.title.toLowerCase() === "facebook")
                    icon = (
                        <SiFacebook className="h-6 w-6 text-gray-400 sm:h-7 sm:w-7 md:h-8 md:w-8" />
                    );
                else if (socialLink.title.toLowerCase() === "github")
                    icon = (
                        <SiGithub className="h-6 w-6 text-gray-400 sm:h-7 sm:w-7 md:h-8 md:w-8" />
                    );
                return (
                    <motion.div
                        key={socialLink._id}
                        className="absolute right-5 top-1/2"
                        variants={socialVariants}
                        custom={translate}
                    >
                        <a
                            href={socialLink.url}
                            target="_blank"
                            rel="noopener noferrer"
                        >
                            {icon}
                        </a>
                    </motion.div>
                );
            })
        );
    }, []);

    return (
        <motion.div
            variants={socialContainerVariants}
            className="absolute top-0 left-0 z-40 h-full w-full"
        >
            {socialIcons}
        </motion.div>
    );
}
