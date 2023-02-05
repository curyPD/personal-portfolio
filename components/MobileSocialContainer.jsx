import { motion } from "framer-motion";
import { SiLinkedin, SiTwitter, SiFacebook, SiGithub } from "react-icons/si";

export default function MobileSocialContainer() {
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

    // [1,2,3].map((el, i, arr) => {
    //     const translate = calculatePositionOfArrayItem(i, arr.length, 24, 20);
    //     return <motion.div key={el._id} custom={translate}>{el.title}</motion.div>
    // })

    return (
        <motion.div
            variants={socialContainerVariants}
            className="absolute top-0 left-0 z-40 h-full w-full"
        >
            {[1, 2, 3, 4].map((_, i, arr) => {
                const translate = calculateTranslateValueOfArrayItem(
                    i,
                    arr.length,
                    24,
                    20
                );
                return (
                    <motion.div
                        key={i}
                        className="absolute right-5 top-1/2"
                        variants={socialVariants}
                        custom={translate}
                    >
                        <a href="#">
                            <SiLinkedin className="h-6 w-6" />
                        </a>
                    </motion.div>
                );
            })}
            {/* <motion.div
                className="absolute right-5 top-1/2"
                variants={socialVariants}
            >
                <a href="#">
                    <SiLinkedin className="h-6 w-6" />
                </a>
            </motion.div>
            <motion.div
                className="absolute right-5 top-1/2"
                variants={socialVariants}
            >
                <a href="#">
                    <SiTwitter className="h-6 w-6" />
                </a>
            </motion.div>
            <motion.div
                className="absolute right-5 top-1/2"
                variants={socialVariants}
            >
                <a href="#">
                    <SiFacebook className="h-6 w-6" />
                </a>
            </motion.div>
            <motion.div
                className="absolute right-5 top-1/2"
                variants={socialVariants}
            >
                <a href="#">
                    <SiGithub className="h-6 w-6" />
                </a>
            </motion.div> */}
        </motion.div>
    );
}
