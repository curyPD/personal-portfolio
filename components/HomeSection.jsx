import { useMemo } from "react";
import { PortableText } from "@portabletext/react";

export default function HomeSection({ homeSection }) {
    const portableTextComponents = useMemo(
        () => ({
            marks: {
                em: ({ children }) => (
                    <em className="whitespace-nowrap bg-gradient-to-br bg-clip-text not-italic text-transparent [&:nth-child(1)]:from-rose-600 [&:nth-child(1)]:to-orange-600 [&:nth-child(2)]:from-purple-500 [&:nth-child(2)]:to-indigo-500 [&:nth-child(3)]:from-sky-500 [&:nth-child(3)]:to-cyan-500">
                        {children}
                    </em>
                ),
            },
            block: {
                normal: ({ children }) => (
                    <p className="mb-14 text-lg font-semibold text-gray-700 xs:text-xl lg:w-4/5 xl:mb-20 xl:text-2xl 2xl:text-3xl 2xl:leading-snug">
                        {children}
                    </p>
                ),
            },
        }),
        []
    );
    return (
        <section
            id="home"
            className="py-28 sm:pt-32 md:pt-36 lg:py-36 lg:pt-40 xl:py-44 xl:pt-28"
        >
            <div className="mx-auto max-w-lg px-6 text-center md:max-w-xl lg:max-w-3xl lg:text-left xl:max-w-4xl 2xl:max-w-6xl">
                <span className="mb-1 block text-sm font-medium tracking-wider text-gray-500 xl:mb-2 xl:text-base 2xl:text-xl">
                    Hi, my name is
                </span>
                <h1 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 xs:text-4xl xl:mb-10 xl:text-5xl 2xl:mb-12 2xl:text-6xl">
                    {homeSection.name}
                </h1>
                <PortableText
                    value={homeSection.description}
                    components={portableTextComponents}
                />
                <div className="mx-auto flex max-w-xs flex-col gap-5 lg:mx-0 lg:max-w-sm lg:flex-row lg:gap-6 lg:text-center xl:max-w-lg">
                    <a
                        href="mailto:romandruzhininwork@gmail.com"
                        className="rounded bg-gray-900 py-2.5 text-base font-medium text-white shadow-lg lg:flex-1 xl:py-3 xl:text-xl 2xl:py-3.5 2xl:text-2xl"
                    >
                        Contact me
                    </a>
                    <a
                        href="#"
                        className="rounded border border-purple-600 bg-white py-2.5 text-base font-medium text-gray-900 shadow-lg lg:flex-1 xl:py-3 xl:text-xl 2xl:py-3.5 2xl:text-2xl"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </section>
    );
}
