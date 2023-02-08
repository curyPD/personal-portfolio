import { motion } from "framer-motion";
import { useMemo } from "react";

export default function GradientText({
    text,
    colors,
    isActive,
    curColor,
    setCurColor,
}) {
    const styles = {
        backgroundImage: `linear-gradient(to right, ${colors.join(",")}, ${
            colors[0]
        })`,
    };
    return (
        <motion.span
            whileHover={{ scale: curColor === "purple" ? 1.06 : 1.03 }}
            transition={{ type: "spring", stiffness: 500, damping: 20 }}
            style={styles}
            className={`mx-1 inline-block ${
                isActive ? "animate-magicText" : ""
            } whitespace-nowrap bg-[length:200%] bg-clip-text text-transparent`}
            onMouseEnter={setCurColor}
        >
            {text}
        </motion.span>
    );
}
