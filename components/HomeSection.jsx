import { useState } from "react";
import GradientText from "./GradientText";

export default function HomeSection({ homeSection }) {
    const [curColor, setCurColor] = useState(null);

    const buttonStyles = {
        boxShadow: `0 0 40px ${
            curColor === "purple" || !curColor
                ? "#a855f756"
                : curColor === "red"
                ? "#f9731656"
                : "#06b6d456"
        }`,
        backgroundImage: `linear-gradient(to right bottom, ${
            curColor === "purple" || !curColor
                ? "#6366f1, #a855f7, #d946ef"
                : curColor === "red"
                ? "#ef4444, #f97316, #eab308"
                : "#14b8a6, #06b6d4, #3b82f6"
        })`,
    };

    return (
        <section
            id="home"
            className="py-28 sm:pt-32 md:pt-36 lg:py-36 lg:pt-40 xl:py-44 xl:pt-28"
        >
            <div className="mx-auto max-w-lg px-4 text-center xs:px-5 md:max-w-xl lg:max-w-3xl lg:text-left xl:max-w-4xl 2xl:max-w-6xl">
                <span className="mb-1 block text-sm font-medium tracking-wider text-gray-400 xl:mb-2 xl:text-base 2xl:text-xl">
                    Hi, my name is
                </span>
                <h1 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 xs:text-4xl xl:mb-10 xl:text-5xl 2xl:mb-12 2xl:text-6xl">
                    {homeSection.name}
                </h1>
                <p className="mb-14 text-lg font-semibold text-gray-600 xs:text-xl lg:w-4/5 xl:mb-20 xl:text-2xl xl:leading-normal 2xl:text-3xl 2xl:leading-normal">
                    I'm a web developer passionate about designing and building{" "}
                    <GradientText
                        colors={["#ef4444", "#f97316", "#eab308"]}
                        isActive={curColor === "red"}
                        curColor={curColor}
                        setCurColor={() => setCurColor("red")}
                        text="blazingly fast"
                    />
                    ,{" "}
                    <GradientText
                        colors={["#6366f1", "#a855f7", "#d946ef"]}
                        isActive={curColor === "purple"}
                        curColor={curColor}
                        setCurColor={() => setCurColor("purple")}
                        text="modern"
                    />
                    , and{" "}
                    <GradientText
                        colors={["#14b8a6", "#06b6d4", "#3b82f6"]}
                        isActive={curColor === "blue"}
                        curColor={curColor}
                        setCurColor={() => setCurColor("blue")}
                        text="highly interactive"
                    />{" "}
                    web applications.
                </p>
                <div className="mx-auto flex max-w-xs flex-col gap-5 lg:mx-0 lg:max-w-sm lg:flex-row lg:gap-7 lg:text-center xl:max-w-lg">
                    <a
                        href="mailto:romandruzhininwork@gmail.com"
                        className="rounded border-2 border-gray-900 bg-gray-900 py-2.5 text-base font-medium text-white shadow-md transition-colors hover:bg-transparent hover:text-gray-900 lg:flex-1 xl:py-3 xl:text-xl 2xl:py-3.5 2xl:text-2xl"
                    >
                        Contact me
                    </a>
                    <div className="group relative lg:flex-1">
                        <span
                            style={buttonStyles}
                            className="absolute top-0 left-0 -z-10 h-full w-full rounded"
                        >
                            &nbsp;
                        </span>
                        <a
                            href="#"
                            className="flex w-full items-center justify-center rounded border-2 border-transparent bg-gray-50 bg-clip-padding py-2.5 text-base font-medium text-gray-900 shadow-md transition-colors group-hover:bg-transparent group-hover:text-white xl:py-3 xl:text-xl 2xl:py-3.5 2xl:text-2xl"
                        >
                            <span className="">Resume</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
