import { PortableText } from "@portabletext/react";
import { useState, useMemo, forwardRef } from "react";
import GradientText from "./GradientText";
import GradientButton from "./GradientButton";
import CtaButton from "./CtaButton";

export default forwardRef(function HomeSection({ homeSection }, ref) {
    const [curColor, setCurColor] = useState("purple");

    const portableTextComponents = useMemo(() => {
        const decorators = homeSection.description[0].children.filter((span) =>
            span.marks.includes("em")
        );
        return {
            block: {
                normal: ({ children }) => (
                    <p className="mb-14 text-lg font-semibold text-gray-600 xs:text-xl lg:w-4/5 xl:mb-20 xl:text-2xl xl:leading-normal 2xl:text-3xl 2xl:leading-normal">
                        {children}
                    </p>
                ),
            },
            marks: {
                em: (props) => {
                    let colors, color;
                    if (
                        props.children.some(
                            (text) => text === decorators[0].text
                        )
                    ) {
                        color = "red";
                        colors = ["#f43f5e", "#f97316", "#eab308"];
                    } else if (
                        props.children.some(
                            (text) => text === decorators[1].text
                        )
                    ) {
                        color = "purple";
                        colors = ["#6366f1", "#a855f7", "#d946ef"];
                    } else {
                        (color = "blue"),
                            (colors = ["#14b8a6", "#06b6d4", "#3b82f6"]);
                    }
                    return (
                        <GradientText
                            color={color}
                            colors={colors}
                            setCurColor={() => setCurColor(color)}
                            text={props.children}
                        />
                    );
                },
            },
        };
    }, []);

    return (
        <section
            id="home"
            className="py-24 sm:pt-32 md:pt-36 lg:py-36 lg:pt-40 xl:py-44"
            ref={ref}
        >
            <div className="mx-auto max-w-lg px-4 text-center xs:px-5 md:max-w-xl lg:max-w-3xl lg:text-left xl:max-w-4xl 2xl:max-w-6xl">
                <span className="mb-1 block text-sm font-medium tracking-wider text-gray-400 xl:mb-2 xl:text-base 2xl:text-xl">
                    Hi, my name is
                </span>
                <h1 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 xs:text-4xl xl:mb-10 xl:text-5xl 2xl:mb-12 2xl:text-6xl">
                    {homeSection.name}
                </h1>
                <PortableText
                    value={homeSection.description}
                    components={portableTextComponents}
                />
                <div className="mx-auto flex max-w-xs flex-col gap-5 lg:mx-0 lg:max-w-sm lg:flex-row lg:gap-7 lg:text-center xl:max-w-lg xl:gap-8">
                    <CtaButton />
                    <GradientButton curColor={curColor} />
                </div>
            </div>
        </section>
    );
});
