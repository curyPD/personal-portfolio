import { useEffect, useState } from "react";

export function useScrollDirection() {
    const threshold = 50;
    const [scrollDir, setScrollDir] = useState("up");

    useEffect(() => {
        let previousScrollYPosition = window.scrollY;

        function scrolledMoreThanThreshold(currentScrollYPosition) {
            return (
                Math.abs(currentScrollYPosition - previousScrollYPosition) >
                threshold
            );
        }

        function isScrollingDown(currentScrollYPosition) {
            return (
                currentScrollYPosition > previousScrollYPosition &&
                !(
                    previousScrollYPosition > 0 && currentScrollYPosition === 0
                ) &&
                !(currentScrollYPosition > 0 && previousScrollYPosition === 0)
            );
        }

        function updateScrollDirection() {
            const currentScrollYPosition = window.scrollY;

            if (scrolledMoreThanThreshold(currentScrollYPosition)) {
                const newScrollDirection = isScrollingDown(
                    currentScrollYPosition
                )
                    ? "down"
                    : "up";
                setScrollDir(newScrollDirection);
                previousScrollYPosition =
                    currentScrollYPosition > 0 ? currentScrollYPosition : 0;
            }
        }

        function onScroll() {
            return window.requestAnimationFrame(updateScrollDirection);
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return scrollDir;
}
