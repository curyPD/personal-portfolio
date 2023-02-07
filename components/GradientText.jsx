import { motion } from "framer-motion";

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
            } whitespace-nowrap bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 bg-[length:200%] bg-clip-text text-transparent`}
            onMouseEnter={setCurColor}
        >
            {text}
        </motion.span>
    );
}
