import { useState } from "react";
import { motion } from "framer-motion";

export default function GradientText({ text, color, colors, setCurColor }) {
    const [isHovered, setIsHovered] = useState(false);

    const styles = {
        backgroundImage: `linear-gradient(to right, ${colors.join(",")}, ${
            colors[0]
        })`,
    };

    const variants = {
        initial: {
            translateY: "0%",
        },
        translate: {
            translateY: "-12%",
        },
    };

    return (
        <motion.span
            onHoverStart={() => {
                setIsHovered(true);
                setCurColor();
            }}
            onHoverEnd={() => {
                setIsHovered(false);
            }}
            animate={isHovered ? "translate" : "initial"}
            variants={variants}
            transition={{ type: "spring", stiffness: 500, damping: 15 }}
            style={styles}
            className={`mx-1 inline-block cursor-default whitespace-nowrap bg-[length:200%] bg-clip-text text-transparent motion-safe:animate-magicText`}
        >
            {text}
        </motion.span>
    );
}
