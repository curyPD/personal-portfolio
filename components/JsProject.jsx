import { useMemo } from "react";
import Image from "next/image";
import { urlFor } from "../lib/sanity.image";
import { getImageDimensions } from "@sanity/asset-utils";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { SiGithub } from "react-icons/si";
import { PortableText } from "@portabletext/react";

export default function FeaturedProject({
    description,
    repo,
    url,
    title,
    technologies,
}) {
    const portableTextComponents = useMemo(
        () => ({
            block: {
                normal: ({ children }) => (
                    <p className="mb-4 text-center text-[10px] font-medium text-purple-900 xs:mb-5 xs:text-xs xs:leading-normal md:mb-6 md:text-sm lg:text-left xl:mb-7 xl:text-base 2xl:mb-7 2xl:pr-5 2xl:text-lg">
                        {children}
                    </p>
                ),
            },
            marks: {
                strikeThrough: ({ children }) => (
                    <span className="line-through">{children}</span>
                ),
                em: ({ children }) => (
                    <span className="opacity-50">{children}</span>
                ),
            },
        }),
        []
    );
    return (
        <article className="relative rounded-lg bg-purple-100/95 px-3 pt-5 pb-12 shadow-lg shadow-gray-900/10 xs:px-4 md:px-6 md:pb-14 md:pt-7  xl:px-10">
            <h4 className="mb-3 text-center text-sm font-semibold text-purple-900 xs:text-base md:text-lg lg:text-left xl:mb-4 xl:text-xl 2xl:mb-5 2xl:text-2xl">
                {title}
            </h4>
            <PortableText
                value={description}
                components={portableTextComponents}
            />
            {/* <p className="mb-4 text-center text-[10px] font-medium text-purple-900 xs:mb-5 xs:text-xs xs:leading-normal md:mb-6 md:text-sm lg:text-left xl:mb-7 xl:text-base 2xl:mb-7 2xl:pr-5 2xl:text-lg">
                
            </p> */}
            <div className="flex items-center justify-center gap-3 md:gap-4 lg:justify-start 2xl:gap-5">
                {technologies.map((tech) => {
                    const { width, height } = getImageDimensions(tech.icon);

                    return (
                        <Image
                            key={tech._id}
                            src={urlFor(tech.icon)
                                .height(125)
                                .format("png")
                                .url()}
                            alt={tech.title}
                            width={width}
                            height={height}
                            className={`h-auto ${
                                tech.title.toLowerCase().includes("html") ||
                                tech.title.toLowerCase().includes("parcel")
                                    ? "w-8 xs:w-11 xl:w-12 2xl:w-16"
                                    : tech.title
                                          .toLowerCase()
                                          .includes("javascript")
                                    ? "w-7 xs:w-10 xl:w-11 2xl:w-14"
                                    : "w-6 xs:w-8 xl:w-9 2xl:w-12"
                            } ${
                                tech.title.toLowerCase().includes("html")
                                    ? "-mx-1 2xl:-mx-2"
                                    : ""
                            }`}
                        />
                    );
                })}
            </div>
            <div className="absolute bottom-1 right-1 flex h-8 w-16 items-center justify-center gap-2 md:h-9 md:w-20 md:gap-3 2xl:right-3 2xl:bottom-3 2xl:h-10 2xl:w-24 2xl:gap-4">
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <HiArrowTopRightOnSquare className="h-5 w-5 text-gray-700 md:h-6 md:w-6 2xl:h-7 2xl:w-7" />
                </a>
                <a href={repo} target="_blank" rel="noopener noreferrer">
                    <SiGithub className="h-5 w-5 text-gray-700 md:h-6 md:w-6 2xl:h-7 2xl:w-7" />
                </a>
            </div>
        </article>
    );
}
