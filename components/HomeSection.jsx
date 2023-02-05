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
                    <p className="mb-14 text-lg font-semibold text-gray-800 xs:text-xl">
                        {children}
                    </p>
                ),
            },
        }),
        []
    );
    return (
        <section id="home" className="py-28">
            <div className="mx-auto max-w-lg px-5 text-center">
                <span className="mb-1 block text-sm font-medium tracking-wider text-gray-500">
                    Hi, my name is
                </span>
                <h1 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 xs:text-4xl">
                    {homeSection.name}
                </h1>
                <PortableText
                    value={homeSection.description}
                    components={portableTextComponents}
                />
                <div className="mx-auto flex max-w-xs flex-col gap-5">
                    <a
                        href="mailto:romandruzhininwork@gmail.com"
                        className="rounded bg-gray-900 py-2.5 text-base font-normal text-white shadow-lg"
                    >
                        Contact me
                    </a>
                    <a
                        href="#"
                        className="rounded border border-purple-600 bg-white py-2.5 text-base font-medium text-gray-900 shadow-lg"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </section>
    );
}
