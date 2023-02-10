import Image from "next/image";
import { useMemo, forwardRef } from "react";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../lib/sanity.image";
import { getImageDimensions } from "@sanity/asset-utils";

export default forwardRef(function AboutSection(
    { aboutSection, scrollToWork, scrollToCta },
    ref
) {
    const portableTextComponents = useMemo(
        () => ({
            block: {
                normal: ({ children }) => (
                    <span className="block text-base font-medium text-gray-600 xl:text-lg 2xl:text-xl 2xl:leading-normal">
                        {children}
                    </span>
                ),
            },
            marks: {
                link: ({ value, children }) => (
                    <a
                        href={value.href}
                        onClick={
                            value.href.includes("work")
                                ? scrollToWork
                                : scrollToCta
                        }
                        className="text-gray-800 underline decoration-gray-800 hover:no-underline focus:outline-none focus-visible:text-gray-400 focus-visible:decoration-gray-400"
                    >
                        {children}
                    </a>
                ),
            },
        }),
        [scrollToCta, scrollToWork]
    );
    const { width, height } = getImageDimensions(aboutSection.profilePicture);
    return (
        <section ref={ref} id="about" className="py-28 lg:py-36 xl:py-44">
            <div className="mx-auto max-w-lg px-5 text-center xs:px-8 md:max-w-xl lg:max-w-3xl lg:px-5 lg:text-left xl:max-w-4xl 2xl:max-w-6xl">
                <div className="flex flex-col items-center lg:mb-11 lg:flex-row lg:items-end lg:gap-6 2xl:mb-14">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 xs:text-3xl xl:text-4xl 2xl:text-5xl">
                        About me
                    </h2>
                    <div className="my-6 h-[3px] w-16 bg-gradient-to-r from-rose-500 via-orange-500 to-yellow-500 lg:my-0 lg:mb-2">
                        &nbsp;
                    </div>
                </div>
                <div className="flex flex-col items-center gap-20 lg:flex-row lg:items-start 2xl:gap-24">
                    <p className="space-y-4 lg:w-3/5 lg:basis-auto 2xl:w-2/3">
                        <PortableText
                            value={aboutSection.about}
                            components={portableTextComponents}
                        />
                    </p>
                    <figure className="w-9/12 max-w-xs shrink-0 lg:w-2/5 lg:max-w-none lg:basis-auto 2xl:w-1/3">
                        <Image
                            src={urlFor(aboutSection.profilePicture).url()}
                            alt={aboutSection.profilePicture.alt}
                            width={width}
                            height={height}
                            className="opacity-70"
                        />
                        <figcaption className="text-xs text-gray-300 lg:text-center xl:text-sm">
                            {aboutSection.profilePicture.caption}
                        </figcaption>
                    </figure>
                </div>
            </div>
        </section>
    );
});
