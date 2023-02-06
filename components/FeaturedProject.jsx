import Image from "next/image";
import { urlFor } from "../lib/sanity.image";
import { getImageDimensions } from "@sanity/asset-utils";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { SiGithub } from "react-icons/si";

export default function FeaturedProject({
    description,
    repo,
    url,
    title,
    screenshot,
    technologies,
}) {
    const { width, height } = getImageDimensions(screenshot);
    return (
        <article className="grid-rows-[repeat(10,_minmax(0,_1fr)] group mb-36 grid grid-cols-10 last:mb-0 sm:mb-40 md:mb-48 lg:mb-64 lg:grid-cols-12 lg:grid-rows-4 lg:items-start">
            <div className="z-10 col-span-full row-start-1 row-end-2 lg:col-start-1 lg:col-end-5 lg:row-end-2 lg:text-left lg:group-even:col-start-8 lg:group-even:col-end-13 lg:group-even:text-right 2xl:col-end-5 2xl:group-even:col-start-9">
                <span className="mb-1 hidden text-xs font-bold uppercase tracking-widest text-purple-400 lg:block">
                    featured project
                </span>
                <h4 className="mb-7 text-xl font-semibold text-gray-900 xs:text-2xl sm:mb-8 xl:text-3xl 2xl:text-4xl">
                    {title}
                </h4>
            </div>
            <div className="relative col-span-full row-start-2 row-end-[7] overflow-hidden rounded-2xl shadow-md shadow-gray-900/10 lg:col-start-5 lg:col-end-13 lg:row-start-1 lg:shadow-lg lg:group-even:col-start-1 lg:group-even:col-end-9 2xl:col-start-5 2xl:col-end-12 2xl:group-even:col-start-2">
                <div className="absolute top-0 right-0 flex h-8 w-16 items-center justify-center gap-2 rounded-bl-2xl bg-purple-300/80 md:h-9 md:w-20 md:gap-3 lg:hidden">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <HiArrowTopRightOnSquare className="h-5 w-5 text-gray-900 md:h-6 md:w-6" />
                    </a>
                    <a href={repo} target="_blank" rel="noopener noreferrer">
                        <SiGithub className="h-5 w-5 text-gray-900 md:h-6 md:w-6" />
                    </a>
                </div>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <Image
                        src={urlFor(screenshot).url()}
                        alt={screenshot.alt}
                        width={width}
                        height={height}
                    />
                </a>
            </div>
            <div className="relative z-10 col-start-2 col-end-10 row-start-6 row-end-[10] rounded-lg bg-purple-100/95 py-4 px-3 shadow-lg shadow-gray-900/10 xs:px-4 xs:py-5 md:px-6 md:py-7 lg:col-start-1 lg:col-end-7 lg:row-start-2 lg:pb-16 lg:group-even:col-start-7 lg:group-even:col-end-13 xl:px-10 2xl:col-end-7 2xl:group-even:col-start-7">
                <p className="mb-4 text-center text-[10px] font-medium text-purple-900 xs:text-xs xs:leading-normal md:mb-5 md:text-sm lg:pr-11 lg:text-left lg:group-even:pl-11 lg:group-even:pr-0 lg:group-even:text-right xl:text-base 2xl:mb-6 2xl:pr-5 2xl:text-lg 2xl:group-even:pl-5 2xl:group-even:pr-0">
                    {description}
                </p>
                <div className="flex items-center justify-center gap-2 md:gap-3 lg:justify-start lg:group-even:justify-end xl:gap-3">
                    {technologies.map((tech) => {
                        const { width, height } = getImageDimensions(tech.icon);

                        return (
                            <Image
                                key={tech._id}
                                src={urlFor(tech.icon)
                                    .height(72)
                                    .format("png")
                                    .url()}
                                alt={tech.title}
                                width={width}
                                height={height}
                                className={
                                    tech.title
                                        .toLowerCase()
                                        .includes("firebase")
                                        ? "h-auto w-4 xs:w-6 xl:w-8 2xl:w-10"
                                        : "h-auto w-6 xs:w-8 xl:w-10 2xl:w-12"
                                }
                            />
                        );
                    })}
                </div>
                <div className="absolute bottom-1 right-1 hidden h-8 w-16 items-center justify-center gap-2 md:h-9 md:w-20 md:gap-3 lg:flex lg:group-even:left-1 lg:group-even:right-auto 2xl:right-3 2xl:bottom-3 2xl:h-10 2xl:w-24 2xl:gap-4 2xl:group-even:left-3 2xl:group-even:right-auto">
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <HiArrowTopRightOnSquare className="h-5 w-5 text-gray-700 md:h-6 md:w-6 2xl:h-7 2xl:w-7" />
                    </a>
                    <a href={repo} target="_blank" rel="noopener noreferrer">
                        <SiGithub className="h-5 w-5 text-gray-700 md:h-6 md:w-6 2xl:h-7 2xl:w-7" />
                    </a>
                </div>
            </div>
        </article>
    );
}
